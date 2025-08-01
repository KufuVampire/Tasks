import { FilterList, VacancyList } from '@/modules';
import { ClearFiltersButton, Container, Main } from '@/shared';
import { cn } from '@/utils';
import styles from './styles.module.css';

export const MainPage = () => {
	return (
		<Main>
			<h1 className={styles.visually_hidden}>Career App</h1>
			<section className={cn(styles.section, styles.search__section)}>
				<Container className={styles.search__container}>
					<FilterList />
					<ClearFiltersButton />
				</Container>
			</section>
			<section className={cn(styles.section, styles.vacancies__section)}>
				<Container className={styles.vacancies__container}>
					<VacancyList />
				</Container>
			</section>
		</Main>
	);
};
