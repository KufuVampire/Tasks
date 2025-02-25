export function formatDate(date) {
	const currentDate = new Date();
	const unFormattedDate = new Date(date);
	const formattedDate = unFormattedDate.toLocaleString('ru', { month: 'long', day: 'numeric' });

	console.log(formattedDate)

	if (currentDate.toDateString() === unFormattedDate.toDateString()) {
		return `Сегодня, ${formattedDate}`;
	}
	// const formatter = new Intl.DateTimeFormat()
	if (currentDate.getFullYear() === unFormattedDate.getFullYear() && currentDate.getDate() != unFormattedDate.getDate()) {
		return formattedDate;
	}

	return `${unFormattedDate.getFullYear()}, ${formattedDate}`;
}