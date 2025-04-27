import { error, json, type RequestHandler } from '@sveltejs/kit';
import { prisma } from '$lib/server/server';

export const GET: RequestHandler = async ({ locals }) => {
	if (!locals.user) {
		throw error(401, 'Unauthorized');
	}
	try {
		const favourites = await prisma.favourite.findMany({
			where: { userId: locals.user.id }
		});
		return json(favourites);
	} catch (err) {
		console.error('Error fetching favourites:', err);
		throw error(500, 'Failed to fetch favourites');
	}
};

// POST req for favs
export const POST: RequestHandler = async ({ request, locals }) => {
	if (!locals.user) {
		throw error(401, 'Unauthorized');
	}

	try {
		const { sportId, sport, league } = await request.json();
		const userId = locals.user.id;

		const existingFavourite = await prisma.favourite.findFirst({
			where: {
				userId: userId,
				sportId: sportId
			}
		});

		if (existingFavourite) {
			return json({ message: 'This favourite already exists' }, { status: 400 });
		}

		const newFavourite = await prisma.favourite.create({
			data: {
				userId: userId,
				sportId: sportId,
				sport: sport,
				league: league
			}
		});

		return json(newFavourite, { status: 201 });
	} catch (err) {
		console.error('Error adding favourite:', err);
		throw error(500, 'Failed to add favourite');
	}
};

// Delete favs?
export const DELETE: RequestHandler = async ({ request, locals }) => {
	if (!locals.user) {
		throw error(401, 'Unauthorized');
	}
	try {
		const { id } = await request.json();
		if (!id) {
			throw error(400, 'Missing favourite ID');
		}
		await prisma.favourite.delete({
			where: { id }
		});

		return json({ message: 'favourite removed' }, { status: 200 });
	} catch (err) {
		console.error('Error removing favourite:', err);
		throw error(500, 'Failed to remove favourite');
	}
};
