import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteDataRequest } from "../../api/deleteRequest";
import { postDelete } from "../../redux/actions";
import s from "./post.module.scss";

const Post = ({ title, text, date, id }) => {
	const dispatch = useDispatch();

	

	const deletePost = () => {
		deleteDataRequest(id)
		dispatch(postDelete(id));
	};

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
