/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF is ~20% smaller than WebP; browsers without support get WebP
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
