import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uniqueId } from "uuid";
import { postDataRequest } from "../../api/postRequest";
import { postAdd } from "../../redux/actions";
import { getDateFromString } from "../../utils";
import s from "./addpanel.module.scss";

const AddPanel = () => {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState({
		title: "",
		text: "",
		date: "",
	});

	const addNewPost = () => {
		const newPost = {
			id: uniqueId(),
			title: inputValue.title,
			body: inputValue.text,
			date: getDateFromString(inputValue.date),
		};
		postDataRequest(newPost);
		dispatch(postAdd(newPost));
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
