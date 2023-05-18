import React, { useEffect } from "react";
import s from "./postlist.module.scss";
import { useDispatch, useSelector } from "react-redux";

import Post from "../Post";
import { getPosts } from "../../api/getRequest";
import { request, requestDone, requestError } from "../../redux/actions";

const PostsList = () => {
	const posts = useSelector((state) => state.postList);
	const status = useSelector((state) => state.loadingStatus);
	const errorMessage = useSelector((state) => state.errorMessage);
	const dispatch = useDispatch();

	const fetchPosts = async () => {
		try {
			dispatch(request());
			const data = await getPosts();
			dispatch(requestDone(data));
		} catch ({ message }) {
			dispatch(requestError(message));
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

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

	return status === "loading" ? (
		<b>Loadin...</b>
	) : status === "error" ? (
		<b>{errorMessage}</b>
	) : (
		<div className={s.root}>{displayPosts()}</div>
	);
};

export default PostsList;
