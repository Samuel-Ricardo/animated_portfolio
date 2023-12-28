/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [`${__dirname}/styles`],
  },
};

module.exports = nextConfig;
