import {
	API_URL,
	PER_PAGE_RELATED_VACANCIES,
	PER_PAGE_VACANCIES,
	SEARCH_PARAMS,
} from '@/constants';

export async function getVacancies(page, query) {
	const res = await fetch(
		`${API_URL.vacancies}?${SEARCH_PARAMS.per_page}=${PER_PAGE_VACANCIES}&${SEARCH_PARAMS.page}=${page}&${SEARCH_PARAMS.order_by}=publication_time&${query}`,
	);
	const data = await res.json();

	return data;
}

export async function getVacancyById(id) {
	const res = await fetch(`${API_URL.vacancies}/${id}`);
	const data = await res.json();

	return data;
}

export async function getRelatedVacancies(id, page) {
	const res = await fetch(
		`${API_URL.vacancies}/${id}/related_vacancies?${SEARCH_PARAMS.per_page}=${PER_PAGE_RELATED_VACANCIES}&${SEARCH_PARAMS.page}=${page}`,
	);
	const data = await res.json();

	return data;
}

export async function getAreas() {
	const res = await fetch(API_URL.areas);
	const data = await res.json();

	return data;
}

export async function getAreaById(id) {
	const res = await fetch(`${API_URL.areas}/${id}`);
	const data = await res.json();

	return data;
}
