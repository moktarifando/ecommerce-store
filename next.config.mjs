/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images-cdn.ubuy.co.id",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "down-id.img.susercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "ibox.co.id",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
