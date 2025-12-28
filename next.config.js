/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // For Netlify optimization
  images: {
    unoptimized: true, // If you're having image issues on Netlify
  },
}

module.exports = nextConfig