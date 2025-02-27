export async function getVacancies(city, page) {
	const res = await fetch(`https://api.hh.ru/vacancies?text=frontend&city=${city}&per_page=18&page=${page}&order_by=publication_time`);
	const data = await res.json();

	return data;
}