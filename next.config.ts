// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['img.spoonacular.com'],  // Дозволяємо завантаження зображень з цього домену
    },
};

export default nextConfig;
