export const getDateFromString = (date) => {
	return new Date(date).toLocaleString("en-EN", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});
};
