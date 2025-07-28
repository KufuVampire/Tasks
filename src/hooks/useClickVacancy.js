import { useVacancyStore } from '@/store';
import { getVacancyIdFromPath } from '@/utils';

export const useClickVacancy = () => {
	const { setVacancyId } = useVacancyStore();

	const handleClickVacancy = e => {
		const id = getVacancyIdFromPath();

		setVacancyId(id);
	};

	return {
		handleClickVacancy,
	};
};
