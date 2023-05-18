import axios from "axios";
import React, { useEffect } from "react";
import s from "./postlist.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	postFetched,
	postFetching,
	postFetchingError,
} from "../../redux/actions";
import Post from "../Post";

const PostsList = () => {
	const loadingStatus = useSelector((state) => state.loadingStatus);
	const posts = useSelector((state) => state.postList);
	const dispatch = useDispatch();

	const fetchPosts = async () => {
		dispatch(postFetching());
		try {
			const response = await axios.get("http://localhost:3001/posts");
			dispatch(postFetched(response.data));
		} catch (error) {
			dispatch(postFetchingError());
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	if (loadingStatus === "loading") return <div>Loading...</div>;
	else if (loadingStatus === "error") return <h1>Eroor</h1>;

	const displayPosts = () =>
		posts.map((post) => (
			<Post
				key={post.id}
				title={post.title}
				text={post.body}
				date={post.date}
				id={post.id}
			/>
		));

	return <div className={s.root}>{displayPosts()}</div>;
};

export default PostsList;
