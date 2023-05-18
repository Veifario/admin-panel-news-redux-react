import axios from "axios";

export const getPosts = async () => {
	const { data } = await axios.get("http://localhost:3001/posts");
	return data;
};
