import { useEffect, useState } from 'react';
import { getVacancies } from '@/api';
import { useVacancies } from '@/hooks'
import { SkeletonBlock, Pagination } from '@/components'
import { VacancyBlock } from '../VacancyBlock/VacancyBlock'
import styles from './styles.module.css'

export const VacancyList = () => {
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const { city, vacancies, setVacancies } = useVacancies();


	useEffect(() => {
		setLoading(true);
		(async () => {
			try {
				const data = await getVacancies(city, page - 1);

				const vacanciesArr = [];
				data.items.map((item) => {
					const date = new Date(item.published_at).toISOString().slice(0, 10);

					const vacancyObj = vacanciesArr.find((el) => Object.keys(el)[0] === date);
					if (vacancyObj) {
						const index = vacanciesArr.indexOf(vacancyObj);
						vacanciesArr[index][date].push(item);
					} else {
						const newVacancyObj = {
							[date]: [item]
						}
						vacanciesArr.push(newVacancyObj);
					}
				});

				setTotalPages(data.pages);
				setVacancies(vacanciesArr);
				setLoading(false);
			} catch (error) {
				console.error(error)
				setError('Не удалось найти вакансии по вашему запросу');
			}
		})();

	}, [getVacancies, page, setPage]);

	if (error) {
		return (
			<p className={styles.error}>
				{error}
			</p>
		)
	}

	return (
		<div className={styles.list}>
			{
				isLoading ? (
					<SkeletonBlock />
				) : (
					vacancies.map((block, i) => (
						<VacancyBlock key={i} block={block} />
					))
				)
			}
			{
				!error && (
					<div className={styles.pagination__wrapper}>
						<Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />
					</div>
				)
			}
		</div>
	)
}
