import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true, // required for `output: "export"`
    },
    // This is required to support PostHog trailing slash API requests
    skipTrailingSlashRedirect: true,
}

export default nextConfig
