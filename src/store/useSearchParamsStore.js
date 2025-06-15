import { create } from 'zustand';

export const useSearchParamsStore = create((set) => ({
	searchParams: new URLSearchParams(
		window.location.search.replaceAll('+', '%2B'),
	),
	searchParamsString: '',
	setSearchParamsString: (query) => set(() => ({ searchParamsString: query })),
}));
