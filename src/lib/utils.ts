import { clsx, type ClassValue } from "clsx"
import { promises as fs } from "node:fs"
import path from "path"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export async function getValidArticleFolders(): Promise<string[]> {
    const articlesDirectory = path.join(process.cwd(), "src/app/articles")

    try {
        const articleFolders = await fs.readdir(articlesDirectory)

        // Create an array of promises that resolve to folder names or null
        const foldersOrNull = await Promise.all(
            articleFolders.map(async (folder) => {
                if (folder.startsWith(".") || folder === "[slug]") return null

                const folderPath = path.join(articlesDirectory, folder)
                try {
                    const stats = await fs.stat(folderPath)
                    if (!stats.isDirectory()) return null
                } catch {
                    return null
                }

                const articlePath = path.join(
                    articlesDirectory,
                    folder,
                    "index.md",
                )
                const markdownExists = await fs
                    .access(articlePath)
                    .then(() => true)
                    .catch(() => false)
                if (!markdownExists) return null

                return folder
            }),
        )

        const validFolders = foldersOrNull.filter((folder) => folder !== null)

        return validFolders
    } catch (error) {
        console.error("Error reading articles directory:", error)
        return []
    }
}
