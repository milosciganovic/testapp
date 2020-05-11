import {createSlice} from '@reduxjs/toolkit';

import * as api from '../lib/api';

export const packetsSlice = createSlice({
	name: 'packets',
	initialState: {
		data: null,
		assets: null,
		contract_length_options: null,
		selectedOption: null,
		error: null,
		loading: false,
	},
	reducers: {
		gotData: (state, action) => {
			state.data = action.payload;
			state.error = action.payload.error;
			state.loading = false;

			if(!state.error && state.data){
				state.assets = state.data.assets;
				state.contract_length_options = state.data.contract_length.contract_length_options;
				state.selectedOption = state.data.contract_length.preselected_contract_length
			}

		},
		loading: state => {
			state.loading = true;
		},
		dropDownOption: (state, action) => {
			state.selectedOption = action.payload
		}

	},
});

export const {hasError, gotData, loading,dropDownOption } = packetsSlice.actions;

export const loadPackets = () => dispatch => {
	dispatch(loading());
	api.getPackets().then(res => dispatch(gotData(res)));
};

export const selectOption = value => dispatch => {
	dispatch(dropDownOption(value))
}

export const selectPackages = state => state.packets;

export default packetsSlice.reducer;
