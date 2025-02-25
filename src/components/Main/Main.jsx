import { FilterList, VacancyList, ClearFiltersButton, Container } from '@/components'
import styles from './styles.module.css'

export const Main = () => {
	return (
		<main className={styles.main}>
			<h1 style={{ visibility: 'hidden' }}></h1>
			<section className={`${styles.section} ${styles.search__section}`}>
				<Container className={styles.search__container}>
					<FilterList />
					<ClearFiltersButton />
				</Container>
			</section>
			<section className={styles.section}>
				<Container>
					<VacancyList />
				</Container>
			</section>
		</main>
	)
}
