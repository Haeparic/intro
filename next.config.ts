import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? "/intro" : "",
  assetPrefix: isGitHubPagesBuild ? "/intro/" : "",
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
