/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lagom-spaces.fra1.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
      },
      // example of locallly hosted images
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/uploads/**",
        // this translates to:
        // http://localhost:3000/uploads/** (which is the default)
      },
    ],
  },
};

module.exports = nextConfig;
