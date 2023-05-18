import axios from "axios";

export const deleteDataRequest = async (id) => {
	const response = await axios.delete(`http://localhost:3001/posts/${id}`);
};
