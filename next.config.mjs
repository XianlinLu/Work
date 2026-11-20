/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
  devIndicators: false,
};

export default config;
