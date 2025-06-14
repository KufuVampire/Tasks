import { create } from "zustand";

export const useVacanciesStore = create((set) => ({
	vacancies: [],
	setVacancies: (vacancies) => set(() => ({ vacancies })),
}));