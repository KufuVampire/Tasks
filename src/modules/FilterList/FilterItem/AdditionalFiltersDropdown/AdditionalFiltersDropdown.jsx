import { SEARCH_PARAMS } from '@/constants';
import { useClickOutside, useDebounce } from '@/hooks';
import { additionalFiltersTypes } from '@/settings';
import { Icon } from '@/shared';
import { useSearchParamsStore } from '@/store';
import { cn } from '@/utils';
import { useId, useRef, useState } from 'react';

import { Dropdown } from './Dropdown/Dropdown';
import styles from './styles.module.css';

function getDropdownManyFiltersCount(searchParams) {
	return [...searchParams.keys()]
		.filter(key => {
			const isEmployment = key === SEARCH_PARAMS.employment;

			return (
				(window.screen.width <= 1024 && isEmployment) ||
				(!isEmployment && key != SEARCH_PARAMS.area)
			);
		})
		.flatMap(key => {
			if (key === SEARCH_PARAMS.text) {
				return searchParams.get(key).split('+');
			}
		}).length;
}

export const AdditionalFiltersDropdown = () => {
	const [isOpen, setOpen] = useState(false);
	const dropdownRef = useRef(null);
	const dropdownId = useId();

	const { searchParams } = useSearchParamsStore();

	const countFilters = useDebounce(getDropdownManyFiltersCount(searchParams));

	const handleClose = () => {
		setOpen(false);
	};

	useClickOutside(dropdownRef, handleClose);

	return (
		<li
			aria-label='Дропдаун с набором аккордеонов из фильтров'
			ref={dropdownRef}
			className={cn(styles.dropdown, {
				[styles.active]: isOpen,
			})}>
			<button
				className={styles.btn}
				onClick={() => setOpen(prev => !prev)}
				aria-expanded={isOpen}
				aria-controls={dropdownId}>
				<div className={styles.wrapper}>
					<Icon name='filterSolid' />
					<p className={styles.title}>Дополнительные фильтры</p>
				</div>
				{countFilters > 0 && (
					<div className={styles.wrapper__right}>
						<span className={styles.count}>{countFilters}</span>
						<Icon
							name='arrowRight'
							className={styles.icon}
						/>
					</div>
				)}
				{countFilters < 1 && (
					<Icon
						name='arrowRight'
						className={styles.icon}
					/>
				)}
			</button>
			<ul
				id={dropdownId}
				className={cn(styles.dropdown__list, {
					[styles.active__list]: isOpen,
				})}>
				{additionalFiltersTypes.map(type => (
					<Dropdown
						type={type}
						key={type}
					/>
				))}
			</ul>
		</li>
	);
};
