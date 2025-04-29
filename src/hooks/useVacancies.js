import { create } from "zustand";

export const useVacancies = create((set) => ({
	city: 'Уральск',
	setCity: (city) => set(() => ({ city })),
	vacancies: [],
	setVacancies: (vacancies) => set(() => ({ vacancies })),
}))