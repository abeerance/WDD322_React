/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lagom-backend-5itxg.ondigitalocean.app",
        port: "",
        pathname: "/uploads/**",
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
