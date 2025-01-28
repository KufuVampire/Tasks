import { VacancyBlock } from '../VacancyBlock/VacancyBlock'
import styles from './styles.module.css'

export const VacancyList = () => {
	const today = ['01-02-2024']
	return (
		<div className={styles.list}>
			{today.map((el, i) => (
				<VacancyBlock key={i} date={el} />
			))}
		</div>
	)
}
