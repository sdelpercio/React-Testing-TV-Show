import React from 'react';
import { render, wait } from '@testing-library/react';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';

jest.mock('./api/fetchShow');

const show = {
	id: 2993,
	url: 'http://www.tvmaze.com/shows/2993/stranger-things',
	name: 'Stranger Things',
	type: 'Scripted',
	language: 'English',
	genres: '["Drama", "Fantasy", "Science-Fiction"]',
	status: 'Running',
	runtime: 60,
	premiered: '2016-07-15',
	officialSite: 'https://www.netflix.com/title/80057281',
	schedule: '{days: Array(1), time: ""}',
	rating: '{average: 8.7}',
	weight: 99,
	network: null,
	webChannel: '{country: null, id: 1, name: "Netflix"}',
	externals: '{imdb: "tt4574334", tvrage: 48493, thetvdb: 305288}',
	image: '{medium: "http://static.tvmaze.com/uploads/images/m…}',
	summary:
		"<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
	updated: 1576977557,
	_links: '{previousepisode: {…}, self: {…}}',
	_embedded: '{episodes: Array(26)}'
};

test('App fetches data and renders data', async () => {
	mockFetchShow.mockResolvedValueOnce(show);

	const { getByTestId } = render(<App />);

	// below await is same as .then() promise
	await wait(() => expect(getByTestId(/poster/i)).toBeInDocument());
});
