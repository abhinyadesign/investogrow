import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
      { protocol: 'https', hostname: 'gygygroup.com' },
      { protocol: 'https', hostname: 'group108-one-fng.com' },
      { protocol: 'https', hostname: 'fairfoxeonnoida140.in' },
      { protocol: 'https', hostname: 'www.skaindia.co.in' },
      { protocol: 'https', hostname: 'www.ats.ind.in' },
      { protocol: 'https', hostname: 'ace-project.co.in' },
      { protocol: 'https', hostname: 'www.experionsaatorinoida.com' },
      { protocol: 'https', hostname: 'prestigecorporatesite.s3.ap-south-1.amazonaws.com' },
      { protocol: 'https', hostname: 'sobhahomez.com' },
      { protocol: 'https', hostname: 'sobhagrouprealty.in' },
    ]
  }
};

export default nextConfig;
