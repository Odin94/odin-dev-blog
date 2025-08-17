import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import { getValidArticleFolders } from "@/lib/utils"
import { createMarkdownComponents } from "@/components/MarkdownComponents"
import { ArticleData } from "@/lib/types"

type ArticlePageProps = {
    params: {
        slug: string
    }
}

// This function runs at build time to generate static paths
export async function generateStaticParams() {
    const articleFolders = await getValidArticleFolders()
    const paths = []

    for (const folder of articleFolders) {
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
                paths.push({
                    slug: data.slug || folder,
                })
            }
        } catch (error) {
            console.warn(`Could not read article ${folder}:`, error)
        }
    }

    return paths
}

// This function runs at build time to get article data
async function getArticleData(slug: string): Promise<ArticleData | null> {
    try {
        const articleFolders = await getValidArticleFolders()

        const articlePaths = articleFolders.map((articleFolder) => {
            const articlePath = path.join(
                process.cwd(),
                "src/app/articles",
                articleFolder,
                "index.md",
            )
            return { articlePath, articleFolder }
        })

        const articleDatas = await Promise.all(
            articlePaths.map(async ({ articlePath, articleFolder }) => {
                const fileContents = await fs.readFile(articlePath, "utf8")
                const { data } = matter(fileContents)
                return { data, articleFolder, articlePath }
            }),
        )
        // TODOdin: Consider validating matter data with zod

        const { articleFolder, articlePath } =
            articleDatas.find(({ data }) => data?.slug === slug) || {}
        if (!articleFolder || !articlePath) return null

        const fileContents = await fs.readFile(articlePath, "utf8")
        const { data, content } = matter(fileContents)

        // TODOdin: Consider using zod to validate the data
        return {
            title: data.title || "",
            date: data.date || "",
            description: data.description || "",
            category: data.category || "",
            tags: data.tags || [],
            draft: data.draft || false,
            slug: data.slug || articleFolder,
            socialImage: data.socialImage,
            content,
        } as ArticleData
    } catch (error) {
        console.error(`Error reading article ${slug}:`, error)
        return null
    }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const resolvedParams = await params
    const article = await getArticleData(resolvedParams.slug)

    if (!article) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="mb-4 text-2xl font-bold text-gray-900">
                        Article Not Found
                    </h1>
                    <p className="text-gray-600">
                        {"The article you're looking for doesn't exist."}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <article className="mx-auto max-w-4xl px-6 py-8">
            <header className="mb-8">
                <h1 className="mb-4 text-4xl font-bold text-gray-900">
                    {article.title}
                </h1>
                <div className="mb-4 flex items-center text-gray-600">
                    <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </time>
                    <span className="mx-2">•</span>
                    <span className="rounded bg-blue-100 px-2 py-1 text-sm text-blue-800">
                        {article.category}
                    </span>
                </div>
                {article.tags.length > 0 ? (
                    <div className="mb-4 flex flex-wrap gap-2">
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
                    <p className="text-lg text-gray-600 italic">
                        {article.description}
                    </p>
                ) : null}
            </header>

            <div className="prose prose-xl max-w-none text-lg leading-relaxed">
                <ReactMarkdown
                    components={createMarkdownComponents(resolvedParams.slug)}
                >
                    {article.content}
                </ReactMarkdown>
            </div>
        </article>
    )
}
