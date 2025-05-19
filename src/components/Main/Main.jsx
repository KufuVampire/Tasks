import {
	ClearFiltersButton,
	Container,
	FilterList,
	RelatedVacanciesList,
	VacancyCardFull,
	VacancyList,
} from '@/components';
import { useVacancy } from '@/hooks';
import { cn } from '@/utils';
import styles from './styles.module.css';

export const Main = () => {
	const { isOpen } = useVacancy();

	return (
		<main className={styles.main}>
			<h1 className={styles.visually_hidden}>Career App</h1>
			<section
				className={cn([styles.section, styles.search__section], {
					[styles.section__hidden]: isOpen,
				})}>
				<Container className={styles.search__container}>
					<FilterList />
					<ClearFiltersButton />
				</Container>
			</section>
			<section
				className={cn([styles.section, styles.vacancies__section], {
					[styles.section__hidden]: isOpen,
				})}>
				<Container className={styles.vacancies__container}>
					<VacancyList />
				</Container>
			</section>
			{isOpen && <VacancyCardFull />}
			{isOpen && <RelatedVacanciesList />}
		</main>
	);
};
