/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = withPWA({
  pwa: {
    dest: 'public', // Destination for the service worker file
    register: true, // Automatically register the service worker
    skipWaiting: true, // Immediately take control of the page
    // Optionally, you can specify the `swDest` if you want to customize the service worker filename
    // swDest: 'sw.js', // Uncomment if you want to specify the service worker file name
  },
  reactStrictMode: true, // Enable React's Strict Mode
  trailingSlash: true, // Optional: adds a trailing slash to the end of URLs
});

export default nextConfig;
