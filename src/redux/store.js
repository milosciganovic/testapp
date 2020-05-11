import {configureStore} from '@reduxjs/toolkit';
import packetsReducer from './packetsSlice';

export default configureStore({
	reducer: {
		packets: packetsReducer,
		// ...other reducers
	},
});
