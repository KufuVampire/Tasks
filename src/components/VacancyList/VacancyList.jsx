import { getVacancies } from '@/api';
import { Pagination, SkeletonBlock } from '@/components';
import { SEARCH_PARAMS } from '@/constants';
import {
	useHiddenVacancies,
	useSearchParams,
	useVacancies,
	useVacancy,
} from '@/hooks';
import { useEffect, useState } from 'react';

import { VacancyBlock } from '../VacancyBlock/VacancyBlock';

import styles from './styles.module.css';

export const VacancyList = () => {
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	const { vacancies, setVacancies } = useVacancies();
	const { setOpen, setVacancyId } = useVacancy();
	const { hiddenVacanciesIds } = useHiddenVacancies();

	const { searchParams, searchParamsString, setSearchParamsString } =
		useSearchParams();

	const handleClickVacancy = (e) => {
		const btn = e.target.closest('button');

		if (!btn) return;

		const id = btn.dataset.id;
		setVacancyId(id);
		setOpen(true);
	};

	useEffect(() => {
		setSearchParamsString(searchParams.toString());
		if (searchParamsString.length > 0) {
			window.history.pushState(
				{},
				'',
				`${window.location.origin}?${decodeURIComponent(searchParamsString)}`,
			);
		} else {
			window.history.replaceState({}, '', '/');
		}

		(async () => {
			try {
				const data = await getVacancies(
					page - 1,
					decodeURIComponent(searchParamsString),
				);

				if (!data) return;

				const items = data.items.filter(
					({ id }) =>
						!!searchParams.get(SEARCH_PARAMS.hidden) ||
						!hiddenVacanciesIds.includes(id),
				);
				const vacanciesArr = [];

				items.map((item) => {
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
			} catch (error) {
				console.error(error);
				setError('Не удалось найти вакансии по вашему запросу');
			}
			setLoading(false);
		})();
	}, [page, hiddenVacanciesIds, searchParamsString]);

	if (
		!isLoading &&
		(error || vacancies.length) < 1 &&
		searchParamsString.length > 0
	) {
		return (
			<p className={styles.not_found}>
				Не удалось найти вакансии с выбранными параметрами. Попробуйте другие.
			</p>
		);
	}

	if (error) {
		return <p className={styles.error}>{error}</p>;
	}

	return (
		<>
			{!isLoading && vacancies.length < 1 && (
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
