export async function getVacancies(city) {
	const res = await fetch(`https://api.hh.ru/vacancies?text=frontend&per_page=100&order_by=publication_time`);
	const data = await res.json();

	return data;
}