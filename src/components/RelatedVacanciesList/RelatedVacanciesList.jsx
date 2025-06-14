import { getRelatedVacancies } from '@/api';
import { Container, Skeleton } from '@/components';
import { PER_PAGE_RELATED_VACANCIES } from '@/config';
import { useVacancyStore } from '@/store';
import { cn } from '@/utils';
import { useEffect, useState } from 'react';
import { RelatedVacancyCard } from './RelatedVacancyCard/RelatedVacancyCard';
import styles from './styles.module.css';

export const RelatedVacanciesList = () => {
	const { vacancyId } = useVacancyStore();
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [page, setPage] = useState(0);
	const [isHasMore, setHasMore] = useState(true);

	const skeletonArr = new Array(PER_PAGE_RELATED_VACANCIES).fill(0);

	useEffect(() => {
		(async () => {
			try {
				const data = await getRelatedVacancies(vacancyId, page);

				if (data.items.length % 6 != 0) {
					setHasMore(false);
				}

				setData((prev) => [...prev, ...data.items]);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [page]);

	return (
		<section
			className={cn([styles.section], {
				[styles.section__hidden]: !isLoading && data.length < 1,
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
					<ul className={styles.list}>
						{data.map((item) => {
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
						onClick={() => setPage((prev) => prev + 1)}>
						Показать ещё
					</button>
				)}
			</Container>
		</section>
	);
};
