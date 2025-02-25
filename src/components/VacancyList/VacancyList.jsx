import { useEffect, useState } from 'react';
import { getVacancies } from '@/api';
import { useVacancies } from '@/hooks'
import { SkeletonBlock } from '@/components'
import { VacancyBlock } from '../VacancyBlock/VacancyBlock'
import styles from './styles.module.css'

export const VacancyList = () => {
	const [isLoading, setLoading] = useState(true);
	const { city, vacancies, setVacancies } = useVacancies();

	useEffect(() => {
		(async () => {
			const data = await getVacancies(city);

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

			setVacancies(vacanciesArr);
			setLoading(false);
		})();

	}, [getVacancies]);

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
		</div>
	)
}
