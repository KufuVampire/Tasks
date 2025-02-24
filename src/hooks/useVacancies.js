import { create } from "zustand";

export const useVacancies = create((set) => ({
	city: 'Уральск',
	setCity: (city) => set(() => ({ city })),
	vacancies: null,
	setVacancies: (vacancies) => set(() => ({ vacancies })),
}))