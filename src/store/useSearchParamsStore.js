import { create } from 'zustand';
import { FILTERS_STORAGE_KEYS } from '@/constants';

const filters = JSON.parse(localStorage.getItem(FILTERS_STORAGE_KEYS.filters)) || '';

export const useSearchParamsStore = create(set => ({
	searchParams: new URLSearchParams(
		window.location.search !== ''
			? window.location.search.replaceAll('+', '%2B')
			: filters.replaceAll('+', '%2B')
	),
	searchParamsString: '',
	setSearchParamsString: query => set(() => ({ searchParamsString: query })),
}));
