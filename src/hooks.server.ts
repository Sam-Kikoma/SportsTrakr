import { verifyJWT } from '$lib/utils/auth';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('token');

	if (token) {
		try {
			const user = await verifyJWT(token);
			event.locals.user = user;
		} catch (error) {
			event.cookies.delete('token', { path: '/' });
		}
	}

	return await resolve(event);
};
