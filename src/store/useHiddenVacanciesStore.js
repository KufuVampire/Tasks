import { create } from 'zustand';

export const useHiddenVacanciesStore = create((set) => ({
	hiddenVacanciesIds: [],
	setVacancyHidden: (vacancyId) =>
		set((state) => ({
			hiddenVacanciesIds: [...state.hiddenVacanciesIds, vacancyId],
		})),
	removeVacancyFromHidden: (vacancyId) =>
		set((state) => ({
			hiddenVacanciesIds: state.hiddenVacanciesIds.filter(
				(id) => id !== vacancyId,
			),
		})),
}));
