/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i5.walmartimages.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'p7.hiclipart.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'toppng.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
