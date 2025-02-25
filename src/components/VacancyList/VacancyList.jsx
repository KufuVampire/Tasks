import { useEffect, useState } from 'react';
import { getVacancies } from '@/api';
import { useVacancies } from '@/hooks'
import { SkeletonBlock, Pagination } from '@/components'
import { VacancyBlock } from '../VacancyBlock/VacancyBlock'
import styles from './styles.module.css'

export const VacancyList = () => {
	const [isLoading, setLoading] = useState(true);
	const [page, setPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const { city, vacancies, setVacancies } = useVacancies();


	useEffect(() => {
		setLoading(true);
		(async () => {
			const data = await getVacancies(city, page - 1);

			const vacanciesArr = [];
			data.items.map((item) => {
				const date = new Date(item.published_at).toISOString().slice(0, 10);

				const obj = vacanciesArr.find((el) => Object.keys(el)[0] === date);
				if (obj) {
					const index = vacanciesArr.indexOf(obj);
					vacanciesArr[index][date].push(item);
				} else {
					const newObj = {
						[date]: [item]
					}
					vacanciesArr.push(newObj);
				}
			});

			setTotalPages(data.pages);
			setVacancies(vacanciesArr);
			setLoading(false);
		})();

	}, [getVacancies, page, setPage]);

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
			<div className={styles.pagination__wrapper}>
				<Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />
			</div>
		</div>
	)
}
