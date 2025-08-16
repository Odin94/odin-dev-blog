import React from "react"
import Image from "next/image"
import slugToFolderMap from "@/lib/article-mapping.json"
import type { Components } from "react-markdown"

// Custom image component to handle relative paths
function CustomImage({
    src,
    alt,
    articleSlug,
    ...props
}: {
    src: string
    alt: string
    articleSlug: string
    [key: string]: unknown
}) {
    if (
        src.startsWith("http://") ||
        src.startsWith("https://") ||
        src.startsWith("/")
    ) {
        return (
            <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                className="h-auto w-full"
                {...props}
            />
        )
    }

    const folderName =
        slugToFolderMap[articleSlug as keyof typeof slugToFolderMap] ||
        articleSlug
    const imagePath = `/articles/${folderName}/${src}`

    return (
        <Image
            src={imagePath}
            alt={alt}
            width={800}
            height={600}
            className="h-auto w-full"
            {...props}
        />
    )
}

export const createMarkdownComponents = (articleSlug: string): Components => {
    return {
        img: ({ src, alt, ...props }) => (
            <CustomImage
                src={typeof src === "string" ? src : ""}
                alt={typeof alt === "string" ? alt : ""}
                articleSlug={articleSlug}
                {...props}
            />
        ),
        h1: ({ children }) => (
            <h1 className="mt-12 mb-6 text-4xl font-bold text-gray-900">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="mt-10 mb-5 text-3xl font-bold text-gray-900">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="mt-6 mb-3 text-xl font-bold text-gray-900">
                {children}
            </h4>
        ),
        h5: ({ children }) => (
            <h5 className="mt-4 mb-2 text-lg font-bold text-gray-900">
                {children}
            </h5>
        ),
        h6: ({ children }) => (
            <h6 className="mt-3 mb-2 text-base font-bold text-gray-900">
                {children}
            </h6>
        ),
        p: ({ children }) => (
            <p className="mb-6 text-lg leading-relaxed text-gray-800">
                {children}
            </p>
        ),
        code: ({ children, className }) => {
            const isInline = !className
            if (isInline) {
                return (
                    <code className="rounded bg-gray-100 px-2 py-1 font-mono text-sm text-gray-800">
                        {children}
                    </code>
                )
            }
            return <code className={className}>{children}</code>
        },
        pre: ({ children }) => (
            <pre className="mb-6 overflow-x-auto rounded-lg bg-gray-900 p-6 text-base text-gray-100">
                {children}
            </pre>
        ),
        ul: ({ children }) => (
            <ul className="mb-6 list-outside list-disc pl-6 text-lg leading-relaxed text-gray-800">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="mb-6 list-outside list-decimal pl-6 text-lg leading-relaxed text-gray-800">
                {children}
            </ol>
        ),
        li: ({ children }) => <li className="mb-2">{children}</li>,
        blockquote: ({ children }) => (
            <blockquote className="mb-6 border-l-4 border-blue-500 bg-blue-50 py-4 pl-6 text-lg text-gray-700 italic">
                {children}
            </blockquote>
        ),
        a: ({ href, children }) => (
            <a
                href={href}
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),
    }
}
