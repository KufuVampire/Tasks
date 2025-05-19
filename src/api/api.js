import { API_URL, PER_PAGE_VACANCIES, SEARCH_PARAMS } from '@/constants';

export async function getVacancies(city, page) {
	const res = await fetch(
		`${API_URL.vacancies}?${SEARCH_PARAMS.text}=frontend&city=${city}&${SEARCH_PARAMS.per_page}=${PER_PAGE_VACANCIES}&${SEARCH_PARAMS.page}=${page}&${SEARCH_PARAMS.order_by}=publication_time`,
	);
	const data = await res.json();

	return data;
}

export async function getVacancyById(id) {
	const res = await fetch(`${API_URL.vacancies}/${id}`);
	const data = await res.json();

	return data;
}

export async function getRelatedVacancies(id, perPage) {
	const res = await fetch(
		`${API_URL.vacancies}/${id}/related_vacancies?${SEARCH_PARAMS.per_page}=${perPage}`,
	);
	const data = await res.json();

	return data;
}
