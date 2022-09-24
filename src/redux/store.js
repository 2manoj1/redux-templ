import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterSlice, inc } from "./features/counter.slice";
import { postSlice } from "./features/post.slice";
import { textManSlice } from "./features/TextMan.slice";

const store = configureStore({
	reducer: {
		[counterSlice.name]: counterReducer,
		[textManSlice.name]: textManSlice.reducer,
		[postSlice.name]: postSlice.reducer,
	},
});

store.dispatch(inc());

export default store;
