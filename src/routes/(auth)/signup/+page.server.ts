import { createJWT, hashPassword } from '$lib/utils/auth';
import type { Actions } from './$types';
import { prisma } from '$lib/server/server';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const { email, username, password } = Object.fromEntries(formData) as {
			username: string;
			email: string;
			password: string;
		};

		try {
			const existingUser = await prisma.user.findFirst({
				where: {
					OR: [{ email }, { username }]
				}
			});
			if (existingUser) {
				return fail(400, {
					message: 'An account with that email or username already exists.'
				});
			}

			const user = await prisma.user.create({
				data: {
					username,
					email,
					password: await hashPassword(password)
				}
			});

			const token = createJWT(user);
			cookies.set('token', token, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24
			});
		} catch (err) {
			console.error('Sign Up Error:', err);
			return fail(500, {
				message: 'An error occured.'
			});
		}

		return redirect(303, '/dashboard');
	}
};
