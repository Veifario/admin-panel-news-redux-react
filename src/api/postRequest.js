import axios from "axios";

export const addPostRequest = async (newPost) => {
	await axios.post("http://localhost:3001/posts", newPost);
};
