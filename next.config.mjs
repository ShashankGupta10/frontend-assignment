/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: 'i.scdn.co',
            protocol: 'https',
        }, {
            hostname: 'misc.scdn.co',
            protocol: 'https',
        }, {
            hostname: 't.scdn.co',
            protocol: 'https',
        }, {
            hostname: 'image-cdn-ak.spotifycdn.com',
            protocol: 'https',
        }],
    },
};

export default nextConfig;
