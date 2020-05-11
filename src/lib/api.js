import * as http from './http';

export const getPackets = () => {
	return http.get('v2/5e8465c23000008400cf4395');
};

/*
	other api calls
*/
