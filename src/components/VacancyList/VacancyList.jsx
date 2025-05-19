import { useEffect, useState } from 'react';

import { getVacancies } from '@/api';
import { useVacancies, useVacancy, useHiddenVacancies } from '@/hooks';
import { SkeletonBlock, Pagination } from '@/components';

import { VacancyBlock } from '../VacancyBlock/VacancyBlock';

import styles from './styles.module.css';

export const VacancyList = () => {
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const { city, vacancies, setVacancies } = useVacancies();
	const { setOpen, setVacancyId } = useVacancy();
	const { hiddenVacanciesIds } = useHiddenVacancies();

	const handleClickVacancy = (e) => {
		const btn = e.target.closest('button');

		if (!btn) return;

		const id = btn.dataset.id;
		setVacancyId(id);
		setOpen(true);
	};

	useEffect(() => {
		setLoading(true);
		(async () => {
			try {
				const data = await getVacancies(city, page - 1);
				const filteredData = data.items.filter(
					({ id }) => !hiddenVacanciesIds.includes(id),
				);
				const vacanciesArr = [];

				filteredData.map((item) => {
					const date = new Date(item.published_at).toISOString().slice(0, 10);

					const vacancyObj = vacanciesArr.find(
						(el) => Object.keys(el)[0] === date,
					);
					if (vacancyObj) {
						const index = vacanciesArr.indexOf(vacancyObj);
						vacanciesArr[index][date].push(item);
					} else {
						const newVacancyObj = {
							[date]: [item],
						};
						vacanciesArr.push(newVacancyObj);
					}
				});

				setTotalPages(data.pages);
				setVacancies(vacanciesArr);
				setLoading(false);
			} catch (error) {
				console.error(error);
				setError('Не удалось найти вакансии по вашему запросу');
			}
		})();
	}, [page, hiddenVacanciesIds]);

	if (error) {
		return <p className={styles.error}>{error}</p>;
	}

	return (
		<>
			{vacancies.length < 1 && (
				<p className={styles.error}>Вы скрыли все вакансии</p>
			)}
			{!isLoading ? (
				<ul
					className={styles.list}
					onClick={handleClickVacancy}>
					{vacancies.map((block, i) => (
						<VacancyBlock
							key={i}
							block={block}
						/>
					))}
				</ul>
			) : (
				<ul className={styles.list}>
					<SkeletonBlock />
				</ul>
			)}
			{vacancies.length > 0 && (
				<div className={styles.pagination__wrapper}>
					<Pagination
						totalPages={totalPages}
						currentPage={page}
						setPage={setPage}
					/>
				</div>
			)}
		</>
	);
};
