import { FiltersTypes } from '@/constants';
import { FilterItem } from '../FilterItem/FilterItem';
import styles from './styles.module.css';

export const FilterList = () => {
	return (
		<ul className={styles.list}>
			<FilterItem type={FiltersTypes.input} />
			<FilterItem type={FiltersTypes.dropdownSingle} />
			<FilterItem type={FiltersTypes.dropdownMany} />
		</ul>
	);
};
