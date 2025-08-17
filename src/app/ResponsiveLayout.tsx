"use client"

import { AppSidebar } from "./sidebar/AppSidebar"

type ResponsiveLayoutProps = {
    children: React.ReactNode
}

export function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
    return (
        <div className="min-h-screen w-full">
            {/* Mobile layout: sidebar flows with content */}
            <div className="md:hidden">
                <div className="bg-red-900 text-white">
                    <AppSidebar />
                </div>
                <main className="bg-snow min-h-screen w-full">{children}</main>
            </div>

            {/* Desktop layout: fixed sidebar with wave */}
            <div className="hidden md:block">
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
        </div>
    )
}
