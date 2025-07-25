import { useVacancyStore } from '@/store';

export const useClickVacancy = () => {
	const { setVacancyId, setOpen } = useVacancyStore();

	const handleClickVacancy = e => {
		const btn = e.target.closest('button');

		if (!btn) return;

		const id = btn.dataset.id;
		setVacancyId(id);
		setOpen(true);
	};

	return {
		handleClickVacancy,
	};
};
