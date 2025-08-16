import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { AppSidebar } from "./sidebar/AppSidebar"

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
                <div className="min-h-screen w-full">
                    {/* Sidebar column */}
                    <div className="fixed top-0 left-0 h-screen w-88 bg-red-900 text-white">
                        <AppSidebar />
                    </div>
                    {/* Wave column */}
                    <div
                        className="fixed top-0 left-88 h-screen w-32"
                        style={{
                            backgroundImage: "url('/wave-haikei.svg')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "auto 100%",
                            backgroundPosition: "left center",
                        }}
                    />
                    {/* Main content column */}
                    <main className="bg-snow ml-120 min-h-screen w-[calc(100%-30rem)]">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}
