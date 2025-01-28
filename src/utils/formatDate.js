export function formatDate(date) {
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth();
	const currentDay = currentDate.getDate();

	const unFormattedDate = new Date(date);
	const formattedDate = unFormattedDate.toLocaleString('default', { month: 'long', day: 'numeric' })

	if (unFormattedDate.getMonth() === currentMonth && unFormattedDate.getDate() === currentDay) {
		return `Сегодня, ${formattedDate}`
	}

	return formattedDate;
}