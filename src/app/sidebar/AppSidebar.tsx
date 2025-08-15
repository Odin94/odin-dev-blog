import { SocialMedia } from "@/components/SocialMedia"
import { Coffee, Home, Settings } from "lucide-react"
import Image from "next/image"

const menuItems = [
    {
        title: "Home",
        url: "/",
        icon: Home,
        target: "self",
    },
    {
        title: "VtM - Progeny",
        url: "https://progeny.odin-matthias.de",
        icon: () => {
            return (
                <Image
                    src={"/ankh.svg"}
                    alt={"heart icon"}
                    width={20}
                    height={20}
                    className="brightness-0 invert"
                />
            )
        },
    },
    {
        title: "Heart - Hiveborn",
        url: "https://hiveborn.odin-matthias.de",
        icon: () => {
            return (
                <Image
                    src={"/heart-illustration-1-svgrepo-com.svg"}
                    alt={"heart icon"}
                    width={20}
                    height={20}
                    className="brightness-0 invert"
                />
            )
        },
        target: "_blank",
    },
    {
        title: "Brindlewood - CozyCrowns",
        url: "https://cozycrowns.odin-matthias.de",
        icon: () => {
            return (
                <Image
                    src={"/queen-svgrepo-com.svg"}
                    alt={"queen icon"}
                    width={20}
                    height={20}
                    className="brightness-0 invert"
                />
            )
        },
        target: "_blank",
    },
    {
        title: "Impressum",
        url: "/impressum",
        icon: Settings,
        target: "self",
    },
]

export function AppSidebar() {
    return (
        <div className="flex h-full flex-col p-6">
            {/* Header */}
            <div className="flex flex-col items-center">
                <Image
                    src="/profile_25.jpg"
                    height={200}
                    width={200}
                    alt="Profile Image"
                    className="aspect-square rounded-full object-cover"
                />
                <h1 className="mt-8 text-6xl font-bold text-white">TTRPG</h1>
                <h1 className="text-6xl font-bold text-white">Tools</h1>
                <h2 className="text-xl text-white italic">By Odin</h2>
            </div>

            {/* Menu */}
            <nav className="mt-20 flex-1 space-y-0">
                {menuItems.map((item) => (
                    <div key={item.title}>
                        <a
                            href={item.url}
                            target={item.target}
                            className="flex items-center gap-3 rounded-md px-4 py-2 text-lg text-white transition-colors duration-500 hover:bg-red-800 hover:text-cyan-200"
                        >
                            <item.icon />
                            <span>{item.title}</span>
                        </a>
                    </div>
                ))}
            </nav>

            <nav className="flex-1 items-center space-y-5">
                <h2 className="text-xl text-white italic">Get in touch!</h2>
                <SocialMedia />
            </nav>

            {/* Footer */}
            <div className="mt-auto flex flex-col items-center">
                <a
                    href="https://ko-fi.com/odin_dev"
                    target="_blank"
                    className="animated-border inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-4 text-lg text-white/90 transition-colors hover:border-white hover:bg-white/10 hover:text-white"
                >
                    <Coffee className="h-5 w-5" />
                    Support me on Ko-fi
                </a>
            </div>
        </div>
    )
}
