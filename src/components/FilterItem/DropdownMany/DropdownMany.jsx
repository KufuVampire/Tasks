import { Icon } from '@/components';
import { AdditionalFiltersTypes, SEARCH_PARAMS } from '@/constants';
import { useClickOutside, useSearchParams } from '@/hooks';
import { cn } from '@/utils';
import { useRef, useState } from 'react';

import { Dropdown } from './Dropdown/Dropdown';
import styles from './styles.module.css';

export const DropdownMany = () => {
	const [isOpen, setOpen] = useState(false);
	const dropdownRef = useRef(null);

	const { searchParams } = useSearchParams();
	const countFilters = [...searchParams.keys()]
		.filter(
			(key) => key != SEARCH_PARAMS.employment && key != SEARCH_PARAMS.area,
		)
		.map((key) => {
			if (key === SEARCH_PARAMS.text) {
				const values = searchParams.get(key).split('+');
				return values;
			}
		})
		.flat().length;

	useClickOutside(dropdownRef, setOpen);

	return (
		<li
			ref={dropdownRef}
			className={cn([styles.dropdown], {
				[styles.active]: isOpen,
			})}>
			<button
				className={styles.btn}
				onClick={() => setOpen((prev) => !prev)}>
				<div className={styles.wrapper}>
					<Icon name="filter-solid" />
					<p className={styles.title}>Дополнительные фильтры</p>
				</div>
				<div className={styles.wrapper__right}>
					{countFilters != 0 && (
						<span className={styles.count}>{countFilters}</span>
					)}
					<Icon
						name="arrow-right"
						className={styles.icon}
					/>
				</div>
			</button>
			<ul
				className={cn([styles.dropdown__list], {
					[styles.active__list]: isOpen,
				})}>
				<Dropdown type={AdditionalFiltersTypes.dateOfPublication} />
				<Dropdown type={AdditionalFiltersTypes.experience} />
				<Dropdown type={AdditionalFiltersTypes.workSchedule} />
				<Dropdown type={AdditionalFiltersTypes.technologyTags} />
				<Dropdown type={AdditionalFiltersTypes.education} />
				<Dropdown type={AdditionalFiltersTypes.incomeLevel} />
				<Dropdown type={AdditionalFiltersTypes.partTimeWork} />
				<Dropdown type={AdditionalFiltersTypes.otherParameters} />
			</ul>
		</li>
	);
};
