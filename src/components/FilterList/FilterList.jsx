import { filtersTypes } from '@/settings';
import { FilterItem } from '../FilterItem/FilterItem';
import styles from './styles.module.css';

export const FilterList = () => {
	return (
		<ul className={styles.list}>
			{filtersTypes.map((type, i) => (
				<FilterItem
					type={type}
					key={i}
				/>
			))}
		</ul>
	);
};
