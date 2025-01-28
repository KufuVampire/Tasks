import { formatDate } from '@/utils';
import { VacancyCard } from '../VacancyCard/VacancyCard';
import styles from './styles.module.css'

export const VacancyBlock = ({ date }) => {
	const arr = new Array(18).fill(0);

	const formattedDate = formatDate(date);

	return (
		<div className={styles.block}>
			<h2 className={styles.heading}>
				<time dateTime={date}>
					{formattedDate}
				</time>
			</h2>
			<ul className={styles.list}>
				{
					arr.map((_, i) => (
						<VacancyCard key={i} />
					))
				}
			</ul>
		</div>
	)
}
