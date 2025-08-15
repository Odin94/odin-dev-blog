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
            <body
                className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen antialiased`}
            >
                <div className="grid min-h-screen w-full grid-cols-[22rem_8rem_1fr]">
                    {/* Sidebar column */}
                    <div className="bg-red-900 text-white">
                        <AppSidebar />
                    </div>
                    {/* Wave column */}
                    <div
                        style={{
                            backgroundImage: "url('/wave-haikei.svg')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "auto 100%",
                            backgroundPosition: "left center",
                        }}
                    />
                    {/* Main content column */}
                    <main className="bg-snow w-full">{children}</main>
                </div>
            </body>
        </html>
    )
}
