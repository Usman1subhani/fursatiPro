/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        // Disable the turbo rules for css files
        '*.css': ['style-loader', 'css-loader', 'postcss-loader']
      }
    }
  }
};

export default nextConfig;