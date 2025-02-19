import { FilterList, VacancyList, ClearFiltersButton } from '@/components'
import styles from './styles.module.css'

export const Main = () => {
	return (
		<main className={styles.main}>
			<h1 style={{ visibility: 'hidden' }}></h1>
			<section className={`${styles.section} ${styles.search__section}`}>
				<div className={`container ${styles.search__container}`}>
					<FilterList />
					<ClearFiltersButton />
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
