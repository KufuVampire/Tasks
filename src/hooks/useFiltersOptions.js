import { create } from "zustand";

export const useFiltersOptions = create(() => ({
  filterOptions: [],
  setFilterOption: (option) => (state) => ({
    filterOptions: [...state.filterOptions, option],
  }),
  removeFilterOption: (option) => (state) => ({
    filterOptions: [...state.filterOptions.filter((item) => item != option)],
  }),
  removeAllFiltersOptions: () => () => ({ filterOptions: [] }),
}));
