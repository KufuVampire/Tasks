import { Icon } from '@/components';
import { SEARCH_PARAMS } from '@/constants';
import { useClickOutside } from '@/hooks';
import { additionalFiltersTypes } from '@/settings';
import { useSearchParamsStore } from '@/store';
import { cn } from '@/utils';
import { useRef, useState } from 'react';

import { Dropdown } from './Dropdown/Dropdown';
import styles from './styles.module.css';

export const DropdownMany = () => {
	const [isOpen, setOpen] = useState(false);
	const dropdownRef = useRef(null);

	const { searchParams } = useSearchParamsStore();

	const countFilters = [...searchParams.keys()]
		.filter(
			(key) => key != SEARCH_PARAMS.employment && key != SEARCH_PARAMS.area
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
			aria-label='Выпадающий список с несколькими выпадающими списками'
			ref={dropdownRef}
			className={cn([styles.dropdown], {
				[styles.active]: isOpen,
			})}>
			<button
				className={styles.btn}
				onClick={() => setOpen((prev) => !prev)}>
				<div className={styles.wrapper}>
					<Icon name='filter-solid' />
					<p className={styles.title}>Дополнительные фильтры</p>
				</div>
				<div className={styles.wrapper__right}>
					{countFilters != 0 && (
						<span className={styles.count}>{countFilters}</span>
					)}
					<Icon
						name='arrow-right'
						className={styles.icon}
					/>
				</div>
			</button>
			<ul
				className={cn([styles.dropdown__list], {
					[styles.active__list]: isOpen,
				})}>
				{additionalFiltersTypes.map((type, i) => (
					<Dropdown
						type={type}
						key={i}
					/>
				))}
			</ul>
		</li>
	);
};
