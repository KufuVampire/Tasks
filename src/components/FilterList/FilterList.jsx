import { FilterItem } from '../FilterItem/FilterItem'

import { FITLER_SETTINGS } from '@/constants'

import styles from './styles.module.css'

export const FilterList = () => {

	return (
		<ul className={styles.list}>
			{
				FITLER_SETTINGS.map(({ iconName, text, type, additionalFilters }, i) => (
					<FilterItem key={i} text={text} iconName={iconName} type={type} additionalFilters={additionalFilters} />
				))
			}
		</ul>
	)
}