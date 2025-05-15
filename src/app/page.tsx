"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"

export default function Home() {
    const items = [
        {
            title: "First Item",
            subtitle: "Subtitle One",
            imageUrl:
                "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Second Item",
            subtitle: "Subtitle Two",
            imageUrl:
                "https://images.pexels.com/photos/11533665/pexels-photo-11533665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Second Item",
            subtitle: "Subtitle Two",
            imageUrl:
                "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ]
    return (
        <div className="pl-20">
            <SidebarTrigger />

            <div className="flex flex-col items-center space-y-8 p-8">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="relative aspect-[3/2] w-full max-w-md overflow-hidden rounded-lg shadow-lg"
                    >
                        <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-4 text-white">
                            <h2 className="text-xl font-bold">{item.title}</h2>
                            <p className="text-sm">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
