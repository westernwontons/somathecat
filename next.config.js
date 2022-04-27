const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src example.com;
  style-src 'self' example.com;
  font-src 'self';  
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	generateEtags: false,
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "Strict-Transport-Security",
						value: "max-age=31536000; includeSubDomains; preload",
					},
					// {
					// 	key: "Content-Security-Policy",
					// 	value: ContentSecurityPolicy.replace(/\s{2,}/g, "").trim(),
					// },
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "SAMEORIGIN",
					},
					{
						key: "Referrer-Policy",
						value: "origin-when-cross-origin",
					},
					{
						key: "Permissions-Policy",
						value: "none",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
