import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mejorar hot reload
  reactStrictMode: true,
  
  // Configuración de webpack para hot reload
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Mejorar hot reload
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
};

export default nextConfig;
