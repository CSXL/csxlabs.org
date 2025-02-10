/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com',
            },
            {
                hostname: 'api.microlink.io'
            }
        ],
    }
};

export default nextConfig;
