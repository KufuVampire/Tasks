import { useEffect, useState } from 'react'
import { Container, Skeleton } from '@/components'
import { RelatedVacancyCard } from './RelatedVacancyCard/RelatedVacancyCard'
import { getRelatedVacancies } from '@/api'
import { useVacancy } from '@/hooks'
import styles from './styles.module.css'

export const RelatedVacanciesList = () => {
	const { vacancyId } = useVacancy();
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const [perPage, setPerPage] = useState(6);
	const [error, setError] = useState('');

	const skeletonArr = new Array(perPage).fill(0);

	useEffect(() => {
		(async () => {
			try {
				const data = await getRelatedVacancies(vacancyId, perPage);

				setData(data);
				setLoading(false)
			} catch (error) {
				console.error(error)
				setError('Не удалось найти данные о похожих вакансиях');
			}
		})();
	}, [perPage]);

	if (error) return;

	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<h2 className={styles.title}>Похожие вакансии</h2>
				{
					isLoading ? (
						<ul>
							{
								skeletonArr.map((_, i) => (
									<Skeleton key={i} />
								))
							}
						</ul>
					) : (
						data.items && (
							<ul className={styles.list}>
								{
									data.items.map((item) => {
										return (
											<RelatedVacancyCard key={item.id} item={item} />
										)
									})
								}
							</ul>
						)
					)
				}
				<button className={styles.btn} onClick={() => setPerPage(prev => prev + 6)}>Показать ещё</button>
			</Container>
		</section>
	)
}
