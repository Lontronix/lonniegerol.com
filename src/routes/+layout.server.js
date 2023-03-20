export async function load({ params }) {
	return { env: process.env.SITE_ENV };
}
