import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.nflxext.com",
        pathname: "/**", // Allows all images from this domain
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
