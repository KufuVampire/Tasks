export function formatSalary(salary) {
	if (!salary) return 'Доход не указан';

	if (!salary.from) return `до ${salary.to} ₽`;
	if (!salary.to) return `от ${salary.from} ₽`;

	return `${salary.from} - ${salary.to} ₽`;
}