import { ArticleData } from "@/lib/types"
import { promises as fs } from "fs"
import matter from "gray-matter"
import Link from "next/link"
import path from "path"

// This function runs at build time to get all articles
async function getAllArticles(): Promise<ArticleData[]> {
    const articlesDirectory = path.join(process.cwd(), "src/app/articles")

    try {
        const articleFolders = await fs.readdir(articlesDirectory)

        const articles = await Promise.all(
            articleFolders
                .filter((folder) => !folder.startsWith(".")) // Exclude hidden folders
                .map(async (folder) => {
                    const articlePath = path.join(
                        articlesDirectory,
                        folder,
                        "index.md",
                    )

                    try {
                        const fileContents = await fs.readFile(
                            articlePath,
                            "utf8",
                        )
                        const { data } = matter(fileContents)

                        // Only include non-draft articles
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

        // Filter out null values and sort by date (newest first)
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

export default async function ArticlesPage() {
    const articles = await getAllArticles()

    return (
        <div className="mx-auto max-w-4xl px-6 py-8">
            <header className="mb-8">
                <h1 className="mb-4 text-4xl font-bold text-gray-900">
                    Articles
                </h1>
                <p className="text-lg text-gray-600">
                    Thoughts, projects, and insights from my development
                    journey.
                </p>
            </header>

            <div className="space-y-8">
                {articles.map((article) => (
                    <article
                        key={article.slug}
                        className="border-b border-gray-200 pb-8"
                    >
                        <Link
                            href={`/articles/${article.slug}`}
                            className="group"
                        >
                            <h2 className="mb-2 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                                {article.title}
                            </h2>
                        </Link>

                        <div className="mb-3 flex items-center text-gray-600">
                            <time dateTime={article.date}>
                                {new Date(article.date).toLocaleDateString(
                                    "en-US",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    },
                                )}
                            </time>
                            <span className="mx-2">•</span>
                            <span className="rounded bg-blue-100 px-2 py-1 text-sm text-blue-800">
                                {article.category}
                            </span>
                        </div>

                        {article.tags.length > 0 ? (
                            <div className="mb-3 flex flex-wrap gap-2">
                                {article.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        ) : null}

                        {article.description ? (
                            <p className="mb-4 text-gray-600">
                                {article.description}
                            </p>
                        ) : null}

                        <Link
                            href={`/articles/${article.slug}`}
                            className="font-medium text-blue-600 hover:text-blue-800"
                        >
                            Read more →
                        </Link>
                    </article>
                ))}
            </div>

            {articles.length === 0 ? (
                <div className="py-12 text-center">
                    <p className="text-gray-600">No articles found.</p>
                </div>
            ) : null}
        </div>
    )
}
