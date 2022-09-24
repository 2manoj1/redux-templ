import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";

export const getPostList = async () => {
	// const res = await fetch(URL);
	// console.log({ res });
	// return await res.json();

	// Axios

	const res = await axios.get(URL);
	return res.data;
};
