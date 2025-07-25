import styles from './styles.module.css';
import {cn} from '@/utils'

export const VacancyFullSkeleton = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<h1 className={cn(styles.skeleton, styles.title)} />
				<p className={cn(styles.skeleton, styles.salary)} />
				<h4 className={cn(styles.skeleton, styles.requirements__title)} />
				<ul className={styles.requirements__list}>
					<li className={styles.requirements__item}>
						<div className={cn(styles.skeleton, styles.requirements__icon)} />
						<div className={cn(styles.skeleton, styles.requirements__text)} />
					</li>
					<li className={styles.requirements__item}>
						<div className={cn(styles.skeleton, styles.requirements__icon)} />
						<div className={cn(styles.skeleton, styles.requirements__text)} />
					</li>
					<li className={styles.requirements__item}>
						<div className={cn(styles.skeleton, styles.requirements__icon)} />
						<div className={cn(styles.skeleton, styles.requirements__text)} />
					</li>
				</ul>
				<button className={cn(styles.skeleton, styles.btn)}></button>
				<h3 className={cn(styles.skeleton, styles.description__title)} />
				<div className={styles.description__wrapper}>
					<p className={cn(styles.skeleton, styles.description)} />
					<p className={cn(styles.skeleton, styles.description)} />
					<p className={cn(styles.skeleton, styles.description)} />
					<p className={cn(styles.skeleton, styles.description)} />
				</div>
				<h3 className={cn(styles.skeleton, styles.skills__title)} />
				<ul className={styles.skills__list}>
					<li className={cn(styles.skeleton, styles.skills__item)} />
					<li className={cn(styles.skeleton, styles.skills__item)} />
					<li className={cn(styles.skeleton, styles.skills__item)} />
					<li className={cn(styles.skeleton, styles.skills__item)} />
					<li className={cn(styles.skeleton, styles.skills__item)} />
					<li className={cn(styles.skeleton, styles.skills__item)} />
					<li className={cn(styles.skeleton, styles.skills__item)} />
					<li className={cn(styles.skeleton, styles.skills__item)} />
				</ul>
				<p className={cn(styles.skeleton, styles.published_at)} />
			</div>
			<div className={styles.company}>
				<div className={cn(styles.skeleton, styles.company__logo)} />
				<div className={styles.company__wrapper}>
					<h2 className={cn(styles.skeleton, styles.company__name)} />
					<address className={cn(styles.skeleton, styles.company__address)} />
				</div>
			</div>
		</div>
	);
};
