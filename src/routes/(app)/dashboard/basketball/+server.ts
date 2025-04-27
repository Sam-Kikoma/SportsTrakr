import { error, json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const selectedLeague = url.searchParams.get('league');
		let apiUrl;

		if (selectedLeague) {
			apiUrl = `http://site.api.espn.com/apis/site/v2/sports/basketball/${selectedLeague}/scoreboard`;
		} else {
			apiUrl = 'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard';
		}

		const response = await fetch(apiUrl);
		const data = await response.json();

		return json(data);
	} catch (err) {
		console.error('Error when fetching from ESPN Basktetball API', err);
		throw error(500, {
			message: 'Something went wrong'
		});
	}
};
