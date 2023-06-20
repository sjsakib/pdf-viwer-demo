/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.node$/,
      loader: 'node-loader',
    });
    return config;
  },
};

module.exports = nextConfig;
