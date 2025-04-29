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

export function formatExperience({ name }) {
	return name === 'Нет опыта' ? 'Без опыта' : `Опыт ${name.toLowerCase()}`;
}

export function formatSalary(salary) {
	if (!salary) return 'Доход не указан';

	if (!salary.from) return `до ${salary.to}`;
	if (!salary.to) return `от ${salary.from}`;

	return `от ${salary.from} - до ${salary.to}`;
}