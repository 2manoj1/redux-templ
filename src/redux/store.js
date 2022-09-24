import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterSlice, inc } from "./features/counter.slice";
import { textManSlice } from "./features/TextMan.slice";

const store = configureStore({
	reducer: {
		[counterSlice.name]: counterReducer,
		[textManSlice.name]: textManSlice.reducer,
	},
});

store.dispatch(inc());

export default store;
