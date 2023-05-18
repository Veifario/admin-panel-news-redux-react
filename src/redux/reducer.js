const initialState = { postList: [], loadingStatus: "idle" };

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
				loadingStatus: "error",
			};
		case "POST_ADD":
			return {
				...state,
				postList: [...state.postList, action.payload],
			};
		case "POST_DELETE":
			return {
				...state,
				postList: state.postList.filter((post) => post.id !== action.payload),
			};
		default:
			return state;
	}
};

export default reducer;
