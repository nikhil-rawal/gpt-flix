import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Enable static export

  images: {
    domains: ["assets.nflxext.com", "image.tmdb.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.nflxext.com",
        pathname: "/**", // Allows all images from this domain
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/**", // Allows all images from this domain
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
