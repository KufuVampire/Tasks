import { SEARCH_PARAMS } from '@/constants';
import { useClickOutside } from '@/hooks';
import { Checkbox, Icon } from '@/shared';
import { useSearchParamsStore } from '@/store';
import { cn } from '@/utils';
import { useEffect, useId, useRef, useState } from 'react';
import { EMPLOYMENTS } from './employments';

import styles from './styles.module.css';

export const EmploymentsFilterDropdown = () => {
	const [isOpen, setOpen] = useState(false);
	const [filtersCount, setFiltersCount] = useState(0);

	const dropdownRef = useRef(null);

	const dropdownId = useId();

	const { searchParams, searchParamsString, setSearchParamsString } =
		useSearchParamsStore();

	const handleClose = () => {
		setOpen(false);
	};

	useClickOutside(dropdownRef, handleClose);

	useEffect(() => {
		const count = searchParams.getAll(SEARCH_PARAMS.employment).length;
		setFiltersCount(count);
	}, [searchParamsString]);

	const handleClick = e => {
		const checkbox = e.target.closest('input');
		if (!checkbox) return;

		const key = checkbox.dataset.name ? checkbox.dataset.name : '';

		if (!checkbox.checked && !searchParams.has(key)) return;

		const value = checkbox.dataset.value ? checkbox.dataset.value : '';

		if (!checkbox.checked && searchParams.has(key, value)) {
			searchParams.delete(key, value);
			setSearchParamsString(searchParams.toString());
			return;
		}

		searchParams.append(key, value);
		setSearchParamsString(searchParams.toString());
	};

	return (
		<li
			aria-label='Выпадающий список'
			ref={dropdownRef}
			className={cn(styles.dropdown, {
				[styles.active]: isOpen,
			})}>
			<button
				className={styles.btn}
				aria-expanded={isOpen}
				aria-controls={dropdownId}
				onClick={() => setOpen(prev => !prev)}>
				<div className={styles.wrapper}>
					<Icon name='briefcase' />
					<p className={styles.title}>Тип занятости</p>
				</div>
				<div className={styles.wrapper__right}>
					{filtersCount != 0 && (
						<span className={styles.count}>{filtersCount}</span>
					)}
					<Icon
						name='arrowRight'
						className={styles.icon}
					/>
				</div>
			</button>
			<ul
				id={dropdownId}
				onClick={handleClick}
				className={cn(styles.dropdown__list, {
					[styles.active__list]: isOpen,
				})}>
				{EMPLOYMENTS.map(item => (
					<li
						className={styles.dropdown__item}
						key={item.text}>
						<Checkbox
							data-name={item.dataName}
							data-value={item.dataValue}
							text={item.text}
							name={item.name}
						/>
					</li>
				))}
			</ul>
		</li>
	);
};
