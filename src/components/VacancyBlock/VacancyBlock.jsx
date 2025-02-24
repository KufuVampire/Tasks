import { formatDate } from '@/utils';
import { VacancyCard } from '../VacancyCard/VacancyCard';
import styles from './styles.module.css'

export const VacancyBlock = ({ block }) => {
	const date = Object.keys(block)[0];
	const items = Object.values(block)[0];
	const formattedDate = formatDate(date);

	return (
		<div className={styles.block}>
			<h2 className={styles.heading}>
				<time dateTime={formattedDate}>
					{formattedDate}
				</time>
			</h2>
			<ul className={styles.list}>
				{
					items.map((item, i) => (
						<VacancyCard key={i} item={item} />
					))
				}
			</ul>
		</div>
	)
}
