import Image from "next/image"

export function SidebarHeader() {
    return (
        <div className="flex flex-col items-center md:items-center">
            {/* Mobile layout: horizontal with smaller image */}
            <div className="flex items-center gap-4 md:hidden">
                <Image
                    src="/profile_25.jpg"
                    height={80}
                    width={80}
                    alt="Profile Image"
                    className="aspect-square rounded-full object-cover"
                />
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-white">TTRPG</h1>
                    <h1 className="text-2xl font-bold text-white">Tools</h1>
                    <h2 className="text-sm text-white italic">By Odin</h2>
                </div>
            </div>

            {/* Desktop layout: vertical with larger image */}
            <div className="hidden md:flex md:flex-col md:items-center">
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
        </div>
    )
}
