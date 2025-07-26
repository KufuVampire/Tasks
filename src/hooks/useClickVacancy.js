import { useVacancyStore } from '@/store';
import { getVacancyIdFromPath } from '@/utils';

export const useClickVacancy = () => {
	const { setVacancyId } = useVacancyStore();

	const handleClickVacancy = e => {
		const link = e.target.closest('a');
		const linkUrl = new URL(link.href);
		const pathname = linkUrl.pathname;
		const id = getVacancyIdFromPath();

		setVacancyId(id);
	};

	return {
		handleClickVacancy,
	};
};
