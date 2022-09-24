import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostList } from "../redux/features/post.slice";

const PostList = () => {
	const postListData = useSelector((state) => state.post.posts);
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(fetchPostList());
	// }, [dispatch]);

	const getData = () => {
		dispatch(fetchPostList());
	};
	return (
		<div>
			<button onClick={getData}>Get Post Data</button>
			<ul>
				{postListData?.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	);
};

export default PostList;
