import { create } from "zustand";

export const useFilterOptions = create(set => ({
	filterOptions: [],
	setFilterOption: (option) => ((state) => ({ filterOptions: [...state.filterOptions, option] })),
	removeFilterOption: (option) => ((state) => ({ filterOptions: [...state.filterOptions.filter((item) => item != option)] })),
	removeAllFilterOptions: () => (() => ({ filterOptions: [] })),
}));