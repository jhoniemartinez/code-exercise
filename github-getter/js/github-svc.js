'use strict';

import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
	maxAge: 60 * 60 * 1000,
	exclude: {
		query: false
	},
	debug: true
});

axios.interceptors.response.use(
	(response) => {
		return response;
	}, (error) => {
		return Promise.reject(error.response);
	}
);
 
const axiosCache = axios.create({
	adapter: cache.adapter
});

export const GithubSvc = {
	search: (keyword) => {
		return axiosCache.get('https://api.github.com/legacy/repos/search/' + keyword);
	}
};