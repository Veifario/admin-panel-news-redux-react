import React from "react";
import { useSelector } from "react-redux";

const Some = () => {
	const data = useSelector((state) => state.postList);
	return (
		<div>
			{data.map(({ id, title }) => (
				<p key={id}>{title}</p>
			))}
		</div>
	);
};

export default Some;
