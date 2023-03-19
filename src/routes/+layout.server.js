export async function load({ params }) {
	return { env: process.env.NODE_ENV };
}
