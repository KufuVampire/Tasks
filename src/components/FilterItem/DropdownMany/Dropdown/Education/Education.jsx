import { Checkbox, Icon } from '@/components';
import { education } from '@/config';
import { SEARCH_PARAMS } from '@/constants';
import { useSearchParamsStore } from '@/store';
import { cn } from '@/utils';
import { useEffect, useState } from 'react';
import styles from '../styles.module.css';

export const Education = (props) => {
	const [isOpen, setOpen] = useState(false);
	const [filtersCount, setFiltersCount] = useState(0);

	const { searchParams, searchParamsString, setSearchParamsString } =
		useSearchParamsStore();

	useEffect(() => {
		const count = searchParams.getAll(SEARCH_PARAMS.education).length;
		setFiltersCount(count);
	}, [searchParamsString]);

	const handleClick = (e) => {
		const checkbox = e.target.closest('input');
		if (!checkbox) return;

		const key = checkbox.dataset.name ? checkbox.dataset.name : '';
		const value = checkbox.dataset.value ? checkbox.dataset.value : '';

		if (!checkbox.checked && !searchParams.has(key)) return;

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
			{...props}
			className={cn([styles.item], { [styles.active]: isOpen })}>
			<button
				className={styles.btn}
				onClick={() => setOpen((prev) => !prev)}>
				<div className={styles.wrapper}>
					<Icon name='graduation' />
					<p className={styles.title}>Образование</p>
				</div>
				<div className={styles.wrapper__right}>
					{filtersCount != 0 && (
						<span className={styles.count}>{filtersCount}</span>
					)}
					<Icon
						name='arrow-right'
						className={styles.icon}
					/>
				</div>
			</button>
			<ul
				onClick={handleClick}
				className={cn([styles.dropdown__list], {
					[styles.active__list]: isOpen,
				})}>
				{education.map((item, i) => (
					<li
						className={styles.dropdown__item}
						key={i}>
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
