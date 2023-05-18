export const postFetching = () => ({ type: "POSTS_FETCHING" });
export const postFetched = (data) => ({ type: "POSTS_FETCHED", payload: data });
export const postFetchingError = () => ({ type: "POSTS_FETCHING_ERROR" });
export const postAdd = (newData) => ({ type: "POST_ADD", payload: newData });
export const postDelete = (id) => ({ type: "POST_DELETE", payload: id });
