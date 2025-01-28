import { Icon } from '@/components'
import styles from './styles.module.css'

export const VacancyCard = () => {
	return (
		<li className={styles.item}>
			<h3 className={styles.heading}>Middle Frontend React разработчик</h3>
			<p className={styles.salary}>120 000 - 180 000 ₽</p>
			<p className={styles.company}>Torgbox</p>
			<p className={styles.city}>Красноярск</p>
			<div className={styles.wrapper}>
				<Icon name='experience' width={12} heigth={12} className={styles.icon__star} />
				<p className={styles.experience}>Опыт от 6 лет</p>
			</div>
			<Icon name='eye-slash-solid' className={styles.icon__eye} />
		</li>
	)
}
