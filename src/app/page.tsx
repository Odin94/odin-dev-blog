import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import { getValidArticleFolders } from "@/lib/utils"

interface ArticleData {
    title: string
    date: string
    description: string
    category: string
    tags: string[]
    draft: boolean
    slug: string
    socialImage?: string
}

// This function runs at build time to get all articles
async function getAllArticles(): Promise<ArticleData[]> {
    try {
        const articleFolders = await getValidArticleFolders()

        const articles = await Promise.all(
            articleFolders.map(async (folder) => {
                const articlePath = path.join(
                    process.cwd(),
                    "src/app/articles",
                    folder,
                    "index.md",
                )

                try {
                    const fileContents = await fs.readFile(articlePath, "utf8")
                    const { data } = matter(fileContents)

                    if (data.draft !== true) {
                        return {
                            title: data.title || "",
                            date: data.date || "",
                            description: data.description || "",
                            category: data.category || "",
                            tags: data.tags || [],
                            draft: data.draft || false,
                            slug: data.slug || folder,
                            socialImage: data.socialImage,
                        } as ArticleData
                    }
                } catch (error) {
                    console.warn(`Could not read article ${folder}:`, error)
                }

                return null
            }),
        )

        return articles
            .filter((article): article is ArticleData => article !== null)
            .sort(
                (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime(),
            )
    } catch (error) {
        console.error("Error reading articles directory:", error)
        return []
    }
}

export default async function Home() {
    const articles = await getAllArticles()

    return (
        <div className="flex flex-col items-center space-y-8 p-8">
            <div className="mb-8 text-center">
                <h1 className="mb-4 text-4xl font-bold text-gray-900">
                    Latest Articles
                </h1>
                <p className="text-lg text-gray-600">
                    Recent thoughts and projects from my development journey.
                </p>
            </div>

            {articles.map((article) => (
                <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="group w-full max-w-md"
                >
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-gray-200 shadow-lg transition-transform duration-300 group-hover:scale-105">
                        {article.socialImage &&
                        article.socialImage !== "no.jpg" ? (
                            <img
                                src={article.socialImage}
                                alt={article.title}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                                <div className="text-center text-white">
                                    <h3 className="text-2xl font-bold">
                                        {article.title}
                                    </h3>
                                    <p className="mt-2 text-sm opacity-90">
                                        {article.category}
                                    </p>
                                </div>
                            </div>
                        )}
                        <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-4 text-white">
                            <h2 className="text-xl font-bold transition-colors group-hover:text-blue-200">
                                {article.title}
                            </h2>
                            <p className="text-sm opacity-90">
                                {article.description || article.category}
                            </p>
                            <div className="mt-2 flex items-center text-xs opacity-75">
                                <time dateTime={article.date}>
                                    {new Date(article.date).toLocaleDateString(
                                        "en-US",
                                        {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        },
                                    )}
                                </time>
                                <span className="mx-2">•</span>
                                <span className="rounded bg-white/20 px-2 py-1">
                                    {article.category}
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

            {articles.length === 0 && (
                <div className="py-12 text-center">
                    <p className="text-gray-600">No articles found.</p>
                </div>
            )}
        </div>
    )
}
