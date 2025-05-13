import { SidebarProvider } from "@/components/ui/sidebar"
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
                <SidebarProvider>
                    <AppSidebar />
                    <main
                        style={{
                            minHeight: "100vh",
                            width: "100%",
                            backgroundImage: "url('/wave-haikei.svg')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "auto 100%",
                            backgroundPosition: "left center",
                        }}
                    >
                        {children}
                    </main>
                </SidebarProvider>
            </body>
        </html>
    )
}
