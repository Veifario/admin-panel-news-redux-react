import React, { useState } from "react";
import s from "./addpanel.module.scss";
import { v4 as uniqueId } from "uuid";
import { addPostRequest } from "../../api/postRequest";
import { useDispatch, useSelector } from "react-redux";
import { addPost, request, requestError } from "../../redux/actions";

const AddPanel = () => {
	const posts = useSelector((state) => state.postList);
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState({
		title: "",
		text: "",
		date: "",
	});

	const addNewPost = async () => {
		const newPost = {
			id: uniqueId(),
			title: inputValue.title,
			body: inputValue.text,
			date: inputValue.date,
		};
		const updatedPosts = [...posts, newPost];
		try {
			dispatch(request());
			await addPostRequest(newPost);
			dispatch(addPost(updatedPosts));
		} catch ({ message }) {
			dispatch(requestError(message));
		}
		setInputValue({ ...inputValue, title: "", text: "", date: "" });
	};

	return (
		<div className={s.root}>
			<input
				type="text"
				placeholder="Введите заголовок поста"
				value={inputValue.title}
				onChange={(e) =>
					setInputValue({ ...inputValue, title: e.target.value })
				}
			/>
			<input
				type="text"
				placeholder="Введите содержание поста"
				value={inputValue.text}
				onChange={(e) => setInputValue({ ...inputValue, text: e.target.value })}
			/>
			<input
				type="date"
				value={inputValue.date}
				onChange={(e) => setInputValue({ ...inputValue, date: e.target.value })}
			/>
			<button onClick={addNewPost}>Добавить</button>
		</div>
	);
};

export default AddPanel;
