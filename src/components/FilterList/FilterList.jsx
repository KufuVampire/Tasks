import { FilterItem } from '../FilterItem/FilterItem'
import styles from './styles.module.css'

const FITLER_SETTINGS = [
	{ iconName: 'location', text: 'Город', isInput: true },
	{ iconName: 'briefcase', text: 'Тип занятости', isInput: false },
	{ iconName: 'filter-solid', text: 'Дополнительные фильтры', isInput: false },
]

export const FilterList = () => {

	return (
		<ul className={styles.list}>
			{
				FITLER_SETTINGS.map(({ iconName, text, isInput }, i) => (
					<FilterItem key={i} text={text} iconName={iconName} isInput={isInput} />
				))
			}
		</ul>
	)
}