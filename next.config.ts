import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true, // required for `output: "export"`
    },
}

export default nextConfig
