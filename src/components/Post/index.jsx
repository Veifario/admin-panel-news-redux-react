import React from "react";
import { deleteDataRequest } from "../../api/deleteRequest";
import { postDelete } from "../../redux/actions";
import s from "./post.module.scss";

const Post = ({ title, text, date, id }) => {
	
	const deletePost = () => {};

	return (
		<div className={s.root}>
			<h2>{title}</h2>
			<p className={s.text}>{text}</p>
			<p className={s.date}>{date}</p>
			<button onClick={deletePost}>&times;</button>
		</div>
	);
};

export default Post;
