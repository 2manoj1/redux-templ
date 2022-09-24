import { createSlice } from "@reduxjs/toolkit";

export const textManSlice = createSlice({
	name: "textMan",
	initialState: {
		text: "Manoj",
	},
	reducers: {
		edit: (state, action) => {
			state.text = action.payload;
		},
	},
});

export const { edit } = textManSlice.actions;
