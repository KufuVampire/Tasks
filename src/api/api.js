import { PER_PAGE_RELATED_VACANCIES, PER_PAGE_VACANCIES } from '@/config';
import { API_URL, SEARCH_PARAMS } from '@/constants';

export async function getVacancies(page, query) {
	const splittedQuery = query.split('&');
	const splittedQueries = splittedQuery.map((query) => query.split('='));
	const updatedQuery = query.includes(SEARCH_PARAMS.text)
		? splittedQueries
				.map((query) => {
					if (query[0] === SEARCH_PARAMS.text) {
						const values = ['frontend', ...query[1].split('+')].join('+');
						return [query[0], values].join('=');
					}

					return query.join('=');
				})
				.join('&')
		: `${query}&${SEARCH_PARAMS.text}=frontend`;

	const res = await fetch(
		`${API_URL.vacancies}?${SEARCH_PARAMS.per_page}=${PER_PAGE_VACANCIES}&${SEARCH_PARAMS.page}=${page}&${SEARCH_PARAMS.order_by}=publication_time&${updatedQuery}`
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
		`${API_URL.vacancies}/${id}/related_vacancies?${SEARCH_PARAMS.per_page}=${PER_PAGE_RELATED_VACANCIES}&${SEARCH_PARAMS.page}=${page}`
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
