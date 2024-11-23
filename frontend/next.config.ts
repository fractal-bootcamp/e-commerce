import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com", "loremflickr.com", "picsum.photos"],
  },
};
export default nextConfig;