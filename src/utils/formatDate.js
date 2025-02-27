export function formatDate(date) {
	const currentDate = new Date();
	const unFormattedDate = new Date(date);
	const formattedDate = unFormattedDate.toLocaleString('ru', { month: 'long', day: 'numeric' });

	if (currentDate.toDateString() === unFormattedDate.toDateString()) {
		return `Сегодня, ${formattedDate}`;
	}

	if (currentDate.getFullYear() === unFormattedDate.getFullYear() && currentDate.getDate() != unFormattedDate.getDate()) {
		return formattedDate;
	}

	return `${unFormattedDate.getFullYear()}, ${formattedDate}`;
}