import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ResponsiveLayout } from "./ResponsiveLayout"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Odin-dev",
    description: "TTRPG web apps dev blog",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/leaf-svgrepo-com.svg" sizes="any" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen antialiased`}
            >
                <ResponsiveLayout>{children}</ResponsiveLayout>
            </body>
        </html>
    )
}
