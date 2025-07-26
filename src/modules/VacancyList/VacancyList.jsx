import { getVacancies } from '@/api';
import { FILTERS_STORAGE_KEYS, SEARCH_PARAMS } from '@/constants';
import { useClickVacancy, useLocalStorage } from '@/hooks';
import { Pagination } from '@/modules';
import { SkeletonBlock } from '@/shared';
import {
	useHiddenVacanciesStore,
	useSearchParamsStore,
	useVacanciesStore,
} from '@/store';
import { formatDate } from '@/utils';
import { useEffect, useRef, useState } from 'react';

import { VacancyBlock } from './VacancyBlock/VacancyBlock';

import styles from './styles.module.css';

export const VacancyList = () => {
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [totalPages, setTotalPages] = useState(0);

	const { vacancies, setVacancies } = useVacanciesStore();
	const { handleClickVacancy } = useClickVacancy();
	const { hiddenVacanciesIds } = useHiddenVacanciesStore();
	const [page, setPage] = useLocalStorage(FILTERS_STORAGE_KEYS.page, 1);
	const [_, setFilters] = useLocalStorage(FILTERS_STORAGE_KEYS.filters);

	const { searchParams, searchParamsString, setSearchParamsString } =
		useSearchParamsStore();

	const prevSearchParamsRef = useRef(searchParamsString);

	useEffect(() => {
		const currentSearchParams = searchParams.toString();
		if (prevSearchParamsRef.current !== currentSearchParams) {
			setPage(1);
			prevSearchParamsRef.current = currentSearchParams;
		}
	}, [searchParamsString]);

	useEffect(() => {
		setSearchParamsString(searchParams.toString());
		setFilters(searchParamsString);

		if (searchParamsString.length > 0) {
			window.history.replaceState(
				{},
				'',
				`${window.location.origin}?${decodeURIComponent(searchParamsString)}`
			);
		} else {
			window.history.replaceState({}, '', '/');
		}
	}, [searchParamsString]);

	useEffect(() => {
		(async () => {
			try {
				const data = await getVacancies(
					page - 1,
					decodeURIComponent(searchParamsString)
				);

				if (data.errors) {
					throw new Error('Не удалось найти вакансии по вашему запросу');
				}

				const items = data.items.filter(
					({ id }) =>
						!!searchParams.get(SEARCH_PARAMS.hidden) ||
						!hiddenVacanciesIds.includes(id)
				);

				const vacanciesMap = new Map();
				for (const item of items) {
					const date = formatDate(item.published_at);

					const foundedItems = vacanciesMap.get(date);
					if (foundedItems) {
						vacanciesMap.set(date, [...foundedItems, item]);
					} else {
						vacanciesMap.set(date, [item]);
					}
				}

				setTotalPages(data.pages);
				setVacancies([...vacanciesMap]);
				setLoading(false);
			} catch (error) {
				console.error(error);
				setError(error);
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
		return <p className={styles.error}>{error.message}</p>;
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
