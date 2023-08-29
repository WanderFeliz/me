/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        domains: [
            'encrypted-tbn0.gstatic.com',
            'cdn.dribbble.com',
            "99designs-blog.imgix.net",
            "i.pinimg.com",
            "images.pexels.com"
        ],
    },
}

module.exports = nextConfig
