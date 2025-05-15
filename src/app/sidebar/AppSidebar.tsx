import { Calendar, Coffee, Home, Inbox, Search, Settings } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const menuItems = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "VtM - Progeny",
        url: "https://progeny.odin-matthias.de",
        icon: Inbox,
    },
    {
        title: "Heart - Heartsong",
        url: "https://heartsong.odin-matthias.de",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Impressum",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar className="text-white">
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel></SidebarGroupLabel>
                    <SidebarGroupContent className="flex flex-col items-center">
                        <Image
                            src="/profile_25.jpg"
                            height={160}
                            width={160}
                            alt="Profile Image"
                            className="aspect-square rounded-full object-cover"
                        />
                        <h1 className="mt-5 text-5xl font-bold text-black">
                            TTRPG
                        </h1>
                        <h1 className="text-5xl font-bold text-black">Tools</h1>
                        <h2 className="text-lg text-black italic">By Odin</h2>
                        {/* TODOdin: Consider removing the highlighting, making text bigger, making it slow-fade to a cool accent color */}
                        {/* kinda like here https://haacked.com */}
                        <SidebarMenu className="mt-15">
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="hover:bg-color-red-900 text-white transition-colors duration-500 hover:text-cyan-200"
                                    >
                                        <a href={item.url} target="_blank">
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupContent className="flex flex-col items-center"></SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="flex flex-col items-center">
                <Button
                    asChild
                    className="border-white/40 bg-white/10 text-white/90 transition-colors hover:border-white hover:bg-white/10 hover:text-white"
                    variant={"outline"}
                >
                    <a href="https://ko-fi.com/odin_dev" target="_blank">
                        <Coffee className="h-4 w-4" />
                        Support me on Ko-fi
                    </a>
                </Button>
            </SidebarFooter>
        </Sidebar>
    )
}
