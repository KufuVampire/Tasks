import { create } from 'zustand';
import { getVacancyIdFromPath } from '@/utils';

export const useVacancyStore = create(set => ({
	vacancyId: getVacancyIdFromPath(),
	setVacancyId: vacancyId => set(() => ({ vacancyId })),
}));
