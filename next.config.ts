import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/wd-new-webiste' : '',
  assetPrefix: isProd ? '/wd-new-webiste/' : '',
  images: { unoptimized: true },
}

module.exports = nextConfig
