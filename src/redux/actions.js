export const request = () => ({
	type: "POSTS_FETCHING",
});
export const requestDone = (data) => ({
	type: "POSTS_FETCHED",
	payload: data,
});
export const requestError = (message) => ({
	type: "POSTS_FETCHING_ERROR",
	payload: message,
});

export const addPost = (data) => ({ type: "POST_ADD", payload: data });
