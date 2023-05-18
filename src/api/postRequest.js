import axios from "axios";

export const postDataRequest = async (newData) => {
    const response = await axios.post("http://localhost:3001/posts", newData);
};