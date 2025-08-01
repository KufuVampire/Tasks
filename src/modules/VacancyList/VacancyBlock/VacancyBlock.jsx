import { VacancyCard } from '@/shared';
import styles from './styles.module.css';

export const VacancyBlock = ({ block }) => {
	const [date, items] = block;

	return (
		<li className={styles.block}>
			<h2 className={styles.heading}>
				<time dateTime={date}>{date}</time>
			</h2>
			<ul className={styles.list}>
				{items.map(item => (
					<VacancyCard
						key={item.id}
						item={item}
					/>
				))}
			</ul>
		</li>
	);
};
