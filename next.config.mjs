/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  // Configure webpack to handle the photos directory
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
    })
    return config
  },
}

export default nextConfig 