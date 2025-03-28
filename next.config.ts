import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./customImageLoader.js", // Path to your custom loader
  },
  /* config options here */
};

export default nextConfig;
