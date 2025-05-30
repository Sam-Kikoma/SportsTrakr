// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { PrismaClient } from '@prisma/client/extension';
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: User;
			message?: string;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	// eslint-disable-next-line no-var
	var prisma: PrismaClient;
}

export {};
