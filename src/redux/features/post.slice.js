import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostList } from "../../services/post.api";

// First, create the thunk
export const fetchPostList = createAsyncThunk(
	"post/fetchPostList",
	async () => {
		return await getPostList();
	}
);

export const postSlice = createSlice({
	name: "post",
	initialState: {
		posts: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPostList.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
	},
});

// Action creators are generated for each case reducer function
// export const {} = postSlice.actions;
