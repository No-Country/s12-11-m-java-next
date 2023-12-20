/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    formats: ["image/webp"],
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
