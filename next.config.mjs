/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cdn.icon-icons.com" },
      { protocol: "https", hostname: "wowtheme7.com" },
    ],
  },
};

export default nextConfig;
