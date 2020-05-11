// import {useState, useCallback} from 'react';
import axios from 'axios';

import ENV from '../env';

import {detectIE} from './util';


export const getHeaders = (method, onlyAuth = false) => {
	let headers = {};
	if (onlyAuth) {
		return headers;
	}
	if (method === 'post' || method === 'put') {
		headers['Content-Type'] = 'application/json';
	}

	if (detectIE() && method === 'get') {
		headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
		headers['Pragma'] = 'no-cache';
		headers['Expires'] = '0';
	}
	return headers;
};

export const request = opts => {
	if (!opts.url) {
		throw new Error('url is required');
	}

	opts.baseURL = ENV.api.url;
	opts.method = opts.method || 'get';

	const headers = opts.headers;
	opts.headers = getHeaders(opts.method);

	if (opts && opts.params && opts.params.token) {
		opts.headers['Authorization'] = `Bearer ${opts.params.token}`;
	}

	if (headers) {
		opts.headers = {
			...opts.headers,
			...headers,
		};
	}

	return axios(opts)
		.then(res => {
			return res.data;
		})
		.catch(res => {
			let err = null;
			let response = res.response;
			if (response && response.data && response.data.error) {
				err = response.data.message;
			} else if (response) {
				err = new Error(response.statusText);
				err.status = response.status;
			} else {
				err = new Error(res.message || 'HTTP Error');
				err.status = 0;
			}
			return {error: err};
		});
};

export const get = (url, params) => request({url, params});

export const post = (url, params, data) => request({method: 'post', url, params, data});

export const put = (url, params, data) => request({method: 'put', url, params, data});

export const del = (url, params, data) => request({method: 'delete', url, params, data});

export const head = (url, params) => request({method: 'head', url, params});
