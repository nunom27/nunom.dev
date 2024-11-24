import type { NextConfig } from "next";

const { withPlausibleProxy } = require("next-plausible");

const nextConfig: NextConfig = withPlausibleProxy({
  customDomain: "https://plausible.home.nunom.dev",
})({
  /* config options here */
});

export default nextConfig;
