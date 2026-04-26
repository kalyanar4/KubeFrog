import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repoBasePath = "/KubeFrog";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? repoBasePath : "",
  assetPrefix: isProduction ? repoBasePath : "",
};

export default nextConfig;
