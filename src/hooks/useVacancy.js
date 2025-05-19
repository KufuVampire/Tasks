import { create } from "zustand";

export const useVacancy = create((set) => ({
	vacancyId: '',
	setVacancyId: (vacancyId) => set(() => ({ vacancyId })),
	isOpen: false,
	setOpen: (isOpen) => set(() => ({ isOpen }))
}))