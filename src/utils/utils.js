export function formatDate(date) {
	const currentDate = new Date();
	const unFormattedDate = new Date(date);
	const formattedDate = unFormattedDate.toLocaleString('ru', {
		month: 'long',
		day: 'numeric',
	});

	if (currentDate.toDateString() === unFormattedDate.toDateString()) {
		return `Сегодня, ${formattedDate}`;
	}

	if (
		currentDate.getFullYear() === unFormattedDate.getFullYear() &&
		currentDate.getDate() != unFormattedDate.getDate()
	) {
		return formattedDate;
	}

	return `${unFormattedDate.getFullYear()}, ${formattedDate}`;
}

export function formatExperience({ name }) {
	return name === 'Нет опыта' ? 'Без опыта' : `Опыт ${name.toLowerCase()}`;
}

export function formatSalary(salary) {
	if (!salary) return 'Доход не указан';

	if (salary.currency === 'RUR') salary.currency = 'RUB';
	if (salary.currency === 'BYR') salary.currency = 'BYN';

	const formatter = new Intl.NumberFormat('ru', {
		style: 'currency',
		currencyDisplay: 'narrowSymbol',
		currency: salary.currency,
	});

	let currencySymbol = formatter.format(0).slice(5).trim();
	if (currencySymbol.includes('UZS')) currencySymbol = "so'm";
	if (currencySymbol === '') currencySymbol = '$';

	if (!salary.from) return `до ${salary.to} ${currencySymbol}`;
	if (!salary.to) return `от ${salary.from} ${currencySymbol}`;

	return `от ${salary.from} - до ${salary.to} ${currencySymbol}`;
}

export const cn = (classnames, obj) => {
	if (!obj) {
		return classnames.filter((className) => className != undefined).join(' ');
	}

	const entries = Object.entries(obj);

	let classes = [...classnames];
	for (let i = 0; i < entries.length; i++) {
		if (entries[i][1]) {
			classes.push(entries[i][0]);
		}
	}

	return classes.filter((className) => className != undefined).join(' ');
};
