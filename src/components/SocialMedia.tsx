import { Coffee } from "lucide-react"
import Image from "next/image"

export function SocialMedia() {
    const socialLinks = [
        {
            name: "Github",
            url: "https://github.com/Odin94",
            icon: () => (
                <Image
                    src="/socials/github.svg"
                    alt="GitHub"
                    width={20}
                    height={20}
                    className="brightness-0 invert"
                />
            ),
            color: "hover:text-white",
        },
        {
            name: "Bluesky",
            url: "https://bsky.app/profile/odinmatthias.bsky.social",
            icon: () => (
                <Image
                    src="/socials/bluesky.svg"
                    alt="Bluesky"
                    width={20}
                    height={20}
                    className="brightness-0 invert"
                />
            ),
            color: "hover:text-blue-500",
        },
        {
            name: "Reddit",
            url: "https://www.reddit.com/user/ProgenyDev/",
            icon: () => (
                <Image
                    src="/socials/reddit.svg"
                    alt="Reddit"
                    width={20}
                    height={20}
                    className="brightness-0 invert"
                />
            ),
            color: "hover:text-orange-500",
        },
        {
            name: "Ko-fi",
            url: "https://ko-fi.com/odin_dev",
            icon: Coffee,
            color: "hover:text-pink-500",
        },
    ]

    return (
        <div className="flex items-center justify-center space-x-4">
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20 ${social.color}`}
                    title={social.name}
                >
                    <social.icon className="h-5 w-5" />
                </a>
            ))}
        </div>
    )
}
