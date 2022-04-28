const ContentSecurityPolicyDev = `
  default-src 'none';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
	connect-src 'self' ws:;
  form-action 'self';
  base-uri 'none';
  style-src 'self' 'unsafe-inline' data:;
  child-src 'self';
  font-src 'self';
  img-src 'self' data: blob:;
  object-src 'none';
`;

const ContentSecurityPolicyProd = `
  default-src 'none';
  script-src 'self';
  form-action 'self';
  base-uri 'none';
  style-src 'self' 'unsafe-inline' data:;
  child-src 'self';
  font-src 'self';
  img-src 'self' data: blob:;
  object-src 'none';
  require-trusted-types-for 'script';
`;

const headers = [
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
			{
				key: "Content-Security-Policy",
				value:
					process.env.NODE_ENV === "development"
						? ContentSecurityPolicyDev.replace(/\s{2,}/g, " ").trim()
						: ContentSecurityPolicyProd.replace(/\s{2,}/g, " ").trim(),
			},
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
				value: "strict-origin",
			},
			{
				key: "Permissions-Policy",
				value: "camera=(), microphone=(), geolocation=()",
			},
			{
				key: "X-XSS-Protection",
				value: "1; mode=block",
			},
		],
	},
];

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	generateEtags: false,
	compress: false,
	async headers() {
		return headers;
	},
};

module.exports = nextConfig;
