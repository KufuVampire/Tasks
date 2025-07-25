import { getVacancies } from '@/api';
import { SEARCH_PARAMS } from '@/constants';
import { useClickVacancy } from '@/hooks';
import { Pagination } from '@/modules';
import { formatDate } from '@/utils';
import { SkeletonBlock } from '@/shared';
import {
	useHiddenVacanciesStore,
	useSearchParamsStore,
	useVacanciesStore,
} from '@/store';
import { useEffect, useState } from 'react';

import { VacancyBlock } from './VacancyBlock/VacancyBlock';

import styles from './styles.module.css';

export const VacancyList = () => {
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	const { vacancies, setVacancies } = useVacanciesStore();
	const { handleClickVacancy } = useClickVacancy();
	const { hiddenVacanciesIds } = useHiddenVacanciesStore();

	const { searchParams, searchParamsString, setSearchParamsString } =
		useSearchParamsStore();

	useEffect(() => {
		setPage(1);
	}, [searchParamsString]);

	useEffect(() => {
		setSearchParamsString(searchParams.toString());
		if (searchParamsString.length > 0) {
			window.history.pushState(
				{},
				'',
				`${window.location.origin}?${decodeURIComponent(searchParamsString)}`
			);
		} else {
			window.history.replaceState({}, '', '/');
		}

		(async () => {
			try {
				const data = await getVacancies(
					page - 1,
					decodeURIComponent(searchParamsString)
				);

				if (!data) return;

				const items = data.items.filter(
					({ id }) =>
						!!searchParams.get(SEARCH_PARAMS.hidden) ||
						!hiddenVacanciesIds.includes(id)
				);

				const vacanciesMap = new Map();
				for (const item of items) {
					const date = formatDate(item.published_at);

					const foundedItem = vacanciesMap.get(date);
					if (foundedItem) {
						vacanciesMap.set(date, [...foundedItem, item]);
					} else {
						vacanciesMap.set(date, [item]);
					}
				}

				setTotalPages(data.pages);
				setVacancies([...vacanciesMap.entries()]);
				setLoading(false);
			} catch (error) {
				console.error(error);
				setError('Не удалось найти вакансии по вашему запросу');
			}
		})();
	}, [page, hiddenVacanciesIds, searchParamsString]);

	if (
		!isLoading &&
		(error || vacancies.length < 1) &&
		searchParamsString.length > 0
	) {
		return (
			<p className={styles.not_found}>
				Не&nbsp;удалось найти вакансии с&nbsp;выбранными параметрами. Попробуйте
				другие.
			</p>
		);
	}

	if (error) {
		return <p className={styles.error}>{error}</p>;
	}

	return (
		<>
			{!isLoading && vacancies.length < 1 && (
				<p className={styles.error}>Вы&nbsp;скрыли все вакансии</p>
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
				<SkeletonBlock />
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
