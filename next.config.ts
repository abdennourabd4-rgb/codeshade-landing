import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - allowedDevOrigins might not be in the type definition yet or varies by version
  allowedDevOrigins: ["172.18.84.53"],
};

export default nextConfig;
