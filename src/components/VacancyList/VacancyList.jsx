import { VacancyBlock } from '../VacancyBlock/VacancyBlock'
import styles from './styles.module.css'

export const VacancyList = () => {
	const today = ['Сегодня, 2 января']
	return (
		<div className={styles.list}>
			{today.map((el, i) => (
				<VacancyBlock key={i} date={el} />
			))}
		</div>
	)
}
