import { Skeleton } from '@/components';
import { PER_PAGE_VACANCIES } from '@/config';
import styles from './styles.module.css';

const arr = new Array(PER_PAGE_VACANCIES).fill(0);

export const SkeletonBlock = () => {
	return (
		<div className={styles.block}>
			<h2 className={styles.heading}></h2>
			<ul className={styles.list}>
				{arr.map((_, i) => (
					<Skeleton key={i} />
				))}
			</ul>
		</div>
	);
};
