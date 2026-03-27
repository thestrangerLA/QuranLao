import type {NextConfig} from 'next';

const repo = 'QuranLao';

const nextConfig: NextConfig = {
  output: 'export',
  // Use repo name for basePath/assetPrefix on production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? `/${repo}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repo}/` : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
