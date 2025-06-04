import { create } from "zustand";

export const useVacancies = create((set) => ({
	vacancies: [],
	setVacancies: (vacancies) => set(() => ({ vacancies })),
}))