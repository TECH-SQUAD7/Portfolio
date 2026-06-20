import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  basePath: isGitHubPages ? "/Portfolio" : undefined,
  assetPrefix: isGitHubPages ? "/Portfolio/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
