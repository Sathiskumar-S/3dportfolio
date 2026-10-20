import type { NextConfig } from "next";
import { basePath } from "./lib/site";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
};

export default nextConfig;
