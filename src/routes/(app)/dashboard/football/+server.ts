import { error, json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const selectedLeague = url.searchParams.get('league');
		let apiUrl;

		if (selectedLeague) {
			apiUrl = `http://site.api.espn.com/apis/site/v2/sports/soccer/${selectedLeague}/scoreboard`;
		} else {
			apiUrl = 'http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard';
		}

		const response = await fetch(apiUrl);
		const data = await response.json();

		return json(data);
	} catch (err) {
		console.error('Error when fetching from ESPN Football API', err);
		throw error(500, {
			message: 'Something went wrong'
		});
	}
};
