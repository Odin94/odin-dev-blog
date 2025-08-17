import fs from "fs"
import path from "path"
import matter from "gray-matter"

// Function to copy article images to public directory
function copyArticleImages() {
    const articlesDir = path.join(process.cwd(), "src/app/articles")
    const publicDir = path.join(process.cwd(), "public")

    const publicArticlesDir = path.join(publicDir, "articles")
    if (!fs.existsSync(publicArticlesDir)) {
        fs.mkdirSync(publicArticlesDir, { recursive: true })
    }

    try {
        const articleFolders = fs.readdirSync(articlesDir)

        for (const folder of articleFolders) {
            if (folder.startsWith(".") || folder === "[slug]") continue

            const articlePath = path.join(articlesDir, folder)

            if (!fs.statSync(articlePath).isDirectory()) continue

            const markdownPath = path.join(articlePath, "index.md")
            let slug = folder // fallback to folder name

            if (fs.existsSync(markdownPath)) {
                try {
                    const fileContents = fs.readFileSync(markdownPath, "utf8")
                    const { data } = matter(fileContents)
                    slug = data.slug || folder
                } catch (error) {
                    console.warn(
                        `Could not read markdown file in ${folder}:`,
                        error,
                    )
                }
            }

            const publicSlugPath = path.join(publicArticlesDir, slug)

            if (!fs.existsSync(publicSlugPath)) {
                fs.mkdirSync(publicSlugPath, { recursive: true })
            }

            const files = fs.readdirSync(articlePath)

            for (const file of files) {
                if (
                    !file.endsWith(".jpg") &&
                    !file.endsWith(".png") &&
                    !file.endsWith(".jpeg")
                )
                    continue

                const sourcePath = path.join(articlePath, file)
                const destPath = path.join(publicSlugPath, file)

                fs.copyFileSync(sourcePath, destPath)

                console.log(
                    `Copied: ${path.relative(process.cwd(), sourcePath)} -> ${path.relative(process.cwd(), destPath)}`,
                )
            }
        }

        console.log("Article images copied successfully!")
    } catch (error) {
        console.error("Error copying article images:", error)
    }
}

copyArticleImages()
