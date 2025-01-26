import { FilterItem } from '../FilterItem/FilterItem'
import styles from './styles.module.css'

export const FilterList = () => {
	const items = [
		{ iconName: 'location', text: 'Город', isInput: true },
		{ iconName: 'briefcase', text: 'Тип занятости', isInput: false },
		{ iconName: 'filterSolid', text: 'Дополнительные фильтры', isInput: false },
	]

	return (
		<ul className={styles.list}>
			{
				items.map(({ iconName, text, isInput }, i) => (
					<FilterItem key={i} text={text} iconName={iconName} isInput={isInput} />
				))
			}
		</ul>
	)
}