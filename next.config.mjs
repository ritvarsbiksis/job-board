/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.S3_BUCKET}.s3.amazonaws.com`,
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
