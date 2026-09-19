/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repoName.toLowerCase().endsWith(".github.io");
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (!isUserSite && repoName ? `/${repoName}` : "");

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
