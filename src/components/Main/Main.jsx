import { FilterList, VacancyList } from '../../components'
import styles from './styles.module.css'

export const Main = () => {
	return (
		<main className={styles.main}>
			<section className={`${styles.section} ${styles.search__section}`}>
				<div className="container">
					<FilterList />
				</div>
			</section>
			<section className={styles.section}>
				<div className="container">
					<VacancyList />
				</div>
			</section>
		</main>
	)
}
