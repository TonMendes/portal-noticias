import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portal-noticias",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
