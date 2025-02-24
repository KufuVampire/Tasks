import { Icon } from '@/components'
import { formatSalary } from '@/utils'
import styles from './styles.module.css'

export const VacancyCard = ({ item }) => {
	const salary = formatSalary(item.salary);
	const experience = item.experience.name === 'Нет опыта' ? 'Без опыта' : `Опыт ${item.experience.name.toLowerCase()}`

	return (
		<li className={styles.item}>
			<h3 className={styles.heading}>{item.name}</h3>
			<p className={styles.salary}>{salary}</p>
			<p className={styles.company}>{item.employer.name}</p>
			<p className={styles.city}>{item.area.name}</p>
			<div className={styles.wrapper}>
				<Icon name='experience' width={12} heigth={12} className={styles.icon__star} />
				<p className={styles.experience}>{experience}</p>
			</div>
			<Icon name='eye-slash-solid' className={styles.icon__eye} />
		</li>
	)
}
