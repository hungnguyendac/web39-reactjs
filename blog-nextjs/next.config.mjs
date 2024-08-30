/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lp-prod.rome2rio.com",
            },
        ],
    },
};

export default nextConfig;
