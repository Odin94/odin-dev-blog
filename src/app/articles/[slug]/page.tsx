import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"

interface ArticleData {
    title: string
    date: string
    description: string
    category: string
    tags: string[]
    draft: boolean
    slug: string
    socialImage?: string
    content?: string
}

interface ArticlePageProps {
    params: {
        slug: string
    }
}

// This function runs at build time to generate static paths
export async function generateStaticParams() {
    const articlesDirectory = path.join(process.cwd(), "src/app/articles")

    try {
        const articleFolders = await fs.readdir(articlesDirectory)

        const paths = []
        for (const folder of articleFolders) {
            if (folder.startsWith(".") || folder === "[slug]") continue

            const articlePath = path.join(articlesDirectory, folder, "index.md")

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
    } catch (error) {
        console.error("Error reading articles directory:", error)
        return []
    }
}

// This function runs at build time to get article data
async function getArticleData(slug: string): Promise<ArticleData | null> {
    try {
        const articlesDirectory = path.join(process.cwd(), "src/app/articles")
        const articleFolders = await fs.readdir(articlesDirectory)

        let articleFolder = null
        for (const folder of articleFolders) {
            if (folder.startsWith(".") || folder === "[slug]") continue

            const articlePath = path.join(articlesDirectory, folder, "index.md")
            try {
                const fileContents = await fs.readFile(articlePath, "utf8")
                const { data } = matter(fileContents)

                if (data.slug === slug || folder === slug) {
                    articleFolder = folder
                    break
                }
            } catch (error) {
                console.warn(`Could not read article ${folder}:`, error)
            }
        }

        if (!articleFolder) {
            return null
        }

        const articlePath = path.join(
            articlesDirectory,
            articleFolder,
            "index.md",
        )
        const fileContents = await fs.readFile(articlePath, "utf8")
        const { data, content } = matter(fileContents)

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
    const article = await getArticleData(params.slug)

    if (!article) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="mb-4 text-2xl font-bold text-gray-900">
                        Article Not Found
                    </h1>
                    <p className="text-gray-600">
                        The article you're looking for doesn't exist.
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
                {article.tags.length > 0 && (
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
                )}
                {article.description && (
                    <p className="text-lg text-gray-600 italic">
                        {article.description}
                    </p>
                )}
            </header>

            <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
        </article>
    )
}
