const initialState = { postList: [], loadingStatus: "", errorMessage: "" };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "POSTS_FETCHING":
			return {
				...state,
				loadingStatus: "loading",
			};
		case "POSTS_FETCHED":
			return {
				...state,
				loadingStatus: "loaded",
				postList: action.payload,
			};
		case "POSTS_FETCHING_ERROR":
			return {
				...state,
				errorMessage: action.payload,
				loadingStatus: "error",
			};
		case "POST_ADD":
			return { ...state, postList: action.payload, loadingStatus: "loaded" };

		case "POST_DELETE":

		default:
			return state;
	}
};

export default reducer;
