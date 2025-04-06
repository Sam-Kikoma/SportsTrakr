import type { Actions } from './$types';
import { prisma } from '$lib/server/server';
import { comparePasswords, createJWT } from '$lib/utils/auth';
import { fail, redirect } from '@sveltejs/kit';
export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const { email, password } = Object.fromEntries(formData) as { email: string; password: string };

		try {
			const user = await prisma.user.findUnique({
				where: { email }
			});

			if (!user || !(await comparePasswords(password, user.password))) {
				return fail(400, {
					message: 'Invalid email or password.'
				});
			}
			const token = createJWT(user);
			cookies.set('token', token, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24
			});
		} catch (err) {
			console.error('Login error:', err);
			return fail(500, {
				message: 'An error occured'
			});
		}

		return redirect(303, '/dashboard');
	}
};
