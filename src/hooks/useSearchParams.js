import { create } from 'zustand';

export const useSearchParams = create((set) => ({
	searchParams: new URLSearchParams(window.location.search.replaceAll('+', '%2B')),
	searchParamsString: '',
	setSearchParamsString: (query) => set(() => ({ searchParamsString: query })),
}));
