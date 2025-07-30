export function formatDate(date) {
	const publishedAtDate = new Date(date);
	const currentDate = new Date();

	const formatForCompare = new Intl.DateTimeFormat('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});

	const getFormattedDate = d => formatForCompare.format(d);

	const publishedAtDateStr = getFormattedDate(publishedAtDate);
	const yesterdayDate = new Date(currentDate).setDate(
		currentDate.getDate() - 1
	);

	const dayMonthFormatter = new Intl.DateTimeFormat('ru-RU', {
		day: 'numeric',
		month: 'long',
	});

	const fullFormatter = new Intl.DateTimeFormat('ru-RU', {
		year: 'numeric',
		day: 'numeric',
		month: 'long',
	});

	if (publishedAtDateStr === getFormattedDate(currentDate)) {
		return `Сегодня, ${dayMonthFormatter.format(publishedAtDate)}`;
	}

	if (publishedAtDateStr === getFormattedDate(yesterdayDate)) {
		return `Вчера, ${dayMonthFormatter.format(publishedAtDate)}`;
	}

	if (publishedAtDate.getFullYear() === currentDate.getFullYear()) {
		return dayMonthFormatter.format(publishedAtDate);
	}

	return fullFormatter.format(publishedAtDate);
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

export function cn(...classNames) {
	const classes = classNames.flatMap(className => {
		if (Array.isArray(className)) return cn(...className);

		if (typeof className === 'object' && className) {
			const objEntries = Object.entries(className);
			return objEntries.map(([key, value]) => {
				if (value && key !== 'undefined') {
					return key;
				}
			});
		}

		return className;
	});

	return classes.filter(className => className).join(' ');
}

export function navigate(to) {
	window.history.pushState({}, '', to);
	const navEvent = new PopStateEvent('popstate');
	window.dispatchEvent(navEvent);
}

export function getVacancyIdFromPath() {
	const path = window.location.pathname;
	const parts = path.split('/');
	return parts.at(-1) || null;
}
