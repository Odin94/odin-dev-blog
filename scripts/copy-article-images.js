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

    const slugToFolderMap = {}

    try {
        const articleFolders = fs.readdirSync(articlesDir)

        for (const folder of articleFolders) {
            if (folder.startsWith(".") || folder === "[slug]") continue

            const articlePath = path.join(articlesDir, folder)

            if (!fs.statSync(articlePath).isDirectory()) continue

            const publicArticlePath = path.join(publicArticlesDir, folder)

            if (!fs.existsSync(publicArticlePath)) {
                fs.mkdirSync(publicArticlePath, { recursive: true })
            }

            const markdownPath = path.join(articlePath, "index.md")
            if (fs.existsSync(markdownPath)) {
                try {
                    const fileContents = fs.readFileSync(markdownPath, "utf8")
                    const { data } = matter(fileContents)
                    const slug = data.slug || folder
                    slugToFolderMap[slug] = folder
                } catch (error) {
                    console.warn(
                        `Could not read markdown file in ${folder}:`,
                        error,
                    )
                    slugToFolderMap[folder] = folder // fallback
                }
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
                const destPath = path.join(publicArticlePath, file)

                // Copy the file
                fs.copyFileSync(sourcePath, destPath)
                console.log(`Copied: ${sourcePath} -> ${destPath}`)
            }
        }

        // Write the slug to folder mapping to a JSON file
        const mappingPath = path.join(
            process.cwd(),
            "src/lib/article-mapping.json",
        )
        fs.writeFileSync(mappingPath, JSON.stringify(slugToFolderMap, null, 2))
        console.log(`Created mapping file: ${mappingPath}`)
        console.log("Article images copied successfully!")
    } catch (error) {
        console.error("Error copying article images:", error)
    }
}

copyArticleImages()
