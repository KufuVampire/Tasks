import { Icon } from '@/components'
import { formatExperience } from '@/utils'

import styles from './styles.module.css'

export const Requirements = ({ data }) => {
	return (
		<>
			<h4 className={styles.title}>Требования к вакансии</h4>
			<ul className={styles.requirements__list}>
				<li className={styles.requirements__item}>
					<Icon name="experience" />
					{formatExperience(data.experience)}
				</li>
				<li className={styles.requirements__item}>
					<Icon name="briefcase" />
					{data.employment.name}
				</li>
				<li className={styles.requirements__item}>
					<Icon name="clock" />
					{data.schedule.name}
				</li>
			</ul></>
	)
}
