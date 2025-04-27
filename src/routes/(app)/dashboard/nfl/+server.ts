import { error, json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	try {
		const apiUrl = `http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard`;
		const response = await fetch(apiUrl);
		const data = await response.json();

		return json(data);
	} catch (err) {
		console.error('Error when fetching from ESPN NFL API', err);
		throw error(500, {
			message: 'Something went wrong'
		});
	}
};
