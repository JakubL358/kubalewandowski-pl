import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project lives inside another repo that has its own lockfile, so we
  // pin the workspace root to this folder. Keeps file tracing correct on Vercel.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
