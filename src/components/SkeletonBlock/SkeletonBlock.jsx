import { Skeleton } from '@/components';
import styles from './styles.module.css';

export const SkeletonBlock = () => {
	const arr = new Array(18).fill(0);

	return (
		<div className={styles.block}>
			<h2 className={styles.heading}></h2>
			<ul className={styles.list}>
				{
					arr.map((_, i) => (
						<Skeleton key={i} />
					))
				}
			</ul>
		</div>
	)
}