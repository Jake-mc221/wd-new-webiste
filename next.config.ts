import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/wd-new-webiste',
  assetPrefix: '/wd-new-webiste/',
}

module.exports = nextConfig
