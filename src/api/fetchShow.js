import axios from 'axios';

export const fetchShow = () => {
	return axios
		.get(
			'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
		)
		.then(res => {
			console.log('response from fetch show', res);
			return res;
		})
		.catch(err => {
			console.log('error from fetch show', err);
			return err;
		});
};
