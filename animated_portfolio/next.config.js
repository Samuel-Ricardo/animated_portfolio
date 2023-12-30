/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com"],
  },
  sassOptions: {
    includePaths: [`${__dirname}/styles`],
  },
};

module.exports = nextConfig;
