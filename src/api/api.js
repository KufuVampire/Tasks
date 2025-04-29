import { API_URL } from '@/constants'

export async function getVacancies(city, page) {
	const res = await fetch(`${API_URL.vacancies}?text=frontend&city=${city}&per_page=18&page=${page}&order_by=publication_time`);
	const data = await res.json();

	return data;
}

export async function getVacancyById(id) {
	const res = await fetch(`${API_URL.vacancies}/${id}`);
	const data = await res.json();

	return data;
}

export async function getRelatedVacancies(id, perPage) {
	const res = await fetch(`${API_URL.vacancies}/${id}/related_vacancies?per_page=${perPage}`);
	const data = await res.json();

	return data;
}