import { FilterList, VacancyList, ClearFiltersButton, Container, VacancyCardFull, RelatedVacanciesList } from '@/components'
import { useVacancy } from '@/hooks'
import styles from './styles.module.css'

export const Main = () => {
	const { isOpen } = useVacancy();

	return (
		<main className={styles.main}>
			<h1 style={{ visibility: 'hidden' }}>Career App</h1>
			<section className={`${styles.section} ${styles.search__section} ${isOpen ? styles.section__hidden : ''}`}>
				<Container className={styles.search__container}>
					<FilterList />
					<ClearFiltersButton />
				</Container>
			</section>
			<section className={`${styles.section} ${isOpen ? styles.section__hidden : ''}`}>
				<Container>
					<VacancyList />
				</Container>
			</section>
			{
				isOpen && (
					<VacancyCardFull />
				)
			}
			{
				isOpen && (
					<RelatedVacanciesList />
				)
			}
		</main>
	)
}
