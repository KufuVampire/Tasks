import { useEffect, useState } from 'react';

import { getRelatedVacancies } from '@/api';
import { PER_PAGE_RELATED_VACANCIES } from '@/config';
import { useClickVacancy } from '@/hooks';
import { Container, Skeleton, VacancyCard } from '@/shared';
import { useHiddenVacanciesStore, useVacancyStore } from '@/store';
import { cn } from '@/utils';

import styles from './styles.module.css';

const skeletonArr = new Array(PER_PAGE_RELATED_VACANCIES).fill(0);

export const RelatedVacanciesList = () => {
	const [vacancies, setVacancies] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [perPage, setPerPage] = useState(PER_PAGE_RELATED_VACANCIES);
	const [isHasMore, setHasMore] = useState(true);
	const [error, setError] = useState(null);

	const { vacancyId } = useVacancyStore();
	const { handleClickVacancy } = useClickVacancy();
	const { hiddenVacanciesIds } = useHiddenVacanciesStore();

	const handleShowMoreVacancies = () => {
		setPerPage(prev => prev + 6);
	};

	useEffect(() => {
		(async () => {
			try {
				const data = await getRelatedVacancies(vacancyId, perPage);

				if (data.errors) {
					throw new Error('Не удалось найти похожии вакансии')
				}

				if (data.found <= perPage) {
					setHasMore(false);
				}

				const filteredVacancies = data.items.filter(
					({ id }) => !hiddenVacanciesIds.includes(id)
				);

				const countVacancies = vacancies.length;
				const lackOfVacancies = perPage - countVacancies;
				if (
					isHasMore &&
					countVacancies % PER_PAGE_RELATED_VACANCIES !== 0 &&
					lackOfVacancies > 0
				) {
					setPerPage(countVacancies + lackOfVacancies);
				}

				if (isHasMore && filteredVacancies.length < 1) {
					handleShowMoreVacancies();
					return;
				}

				setVacancies(filteredVacancies);
				setLoading(false);
			} catch (error) {
				console.error(error);
				setError(error);
			}
		})();
	}, [perPage, isHasMore, hiddenVacanciesIds]);

	if (error) {
		return;
	}

	return (
		<section
			className={cn(styles.section, {
				[styles.section__hidden]:
					!isLoading && vacancies.length < 1 && !isHasMore,
			})}>
			<Container className={styles.container}>
				<h2 className={styles.title}>Похожие вакансии</h2>
				{isLoading ? (
					<ul className={styles.list}>
						{skeletonArr.map((_, i) => (
							<Skeleton key={i} />
						))}
					</ul>
				) : (
					<ul
						className={styles.list}
						onClick={handleClickVacancy}>
						{vacancies.map(item => (
							<VacancyCard
								key={item.id}
								item={item}
							/>
						))}
					</ul>
				)}
				{isHasMore && (
					<button
						className={styles.btn}
						onClick={handleShowMoreVacancies}>
						Показать ещё
					</button>
				)}
			</Container>
		</section>
	);
};
