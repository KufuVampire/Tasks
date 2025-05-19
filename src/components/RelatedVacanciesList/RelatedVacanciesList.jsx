import { getRelatedVacancies } from '@/api';
import { Container, Skeleton } from '@/components';
import { PER_PAGE_RELATED_VACANCIES } from '@/constants';
import { useVacancy } from '@/hooks';
import { cn } from '@/utils';
import { useEffect, useState } from 'react';
import { RelatedVacancyCard } from './RelatedVacancyCard/RelatedVacancyCard';
import styles from './styles.module.css';

export const RelatedVacanciesList = () => {
	const { vacancyId } = useVacancy();
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const [perPage, setPerPage] = useState(PER_PAGE_RELATED_VACANCIES);
	const [isHasMore, setHasMore] = useState(true);

	const skeletonArr = new Array(perPage).fill(0);

	useEffect(() => {
		(async () => {
			try {
				const data = await getRelatedVacancies(vacancyId, perPage);
				if (data.items.length % 6 != 0) {
					setHasMore(false);
				}

				setData(data);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [perPage]);

	return (
		<section
			className={cn([styles.section], {
				[styles.section__hidden]:
					!isLoading && (data.items === null || data.items.length < 1),
			})}>
			<Container className={styles.container}>
				<h2 className={styles.title}>Похожие вакансии</h2>
				{isLoading ? (
					<ul>
						{skeletonArr.map((_, i) => (
							<Skeleton key={i} />
						))}
					</ul>
				) : (
					<ul className={styles.list}>
						{data.items.map((item) => {
							return (
								<RelatedVacancyCard
									key={item.id}
									item={item}
								/>
							);
						})}
					</ul>
				)}
				{isHasMore && (
					<button
						className={styles.btn}
						onClick={() => setPerPage((prev) => prev + 6)}>
						Показать ещё
					</button>
				)}
			</Container>
		</section>
	);
};
