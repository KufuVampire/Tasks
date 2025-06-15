import { Checkbox, Icon } from '@/components';
import { technologyTags } from '@/config';
import { SEARCH_PARAMS } from '@/constants';
import { useSearchParamsStore } from '@/store';
import { cn } from '@/utils';
import { useEffect, useState } from 'react';
import styles from '../styles.module.css';

export const TechnologyTags = (props) => {
	const [isOpen, setOpen] = useState(false);
	const [filtersCount, setFiltersCount] = useState(0);

	const { searchParams, searchParamsString, setSearchParamsString } =
		useSearchParamsStore();

	useEffect(() => {
		if (!searchParams.has(SEARCH_PARAMS.text)) return;

		const filters = searchParams.get(SEARCH_PARAMS.text).split('+');

		setFiltersCount(filters.length);
		if (filters.includes('вечерний')) {
			setFiltersCount((prev) => prev - 1);
		}
	}, [searchParamsString]);

	const handleClick = (e) => {
		const checkbox = e.target.closest('input');
		if (!checkbox) return;

		const key = checkbox.dataset.name ? checkbox.dataset.name : '';
		const value = checkbox.dataset.value ? checkbox.dataset.value : '';

		if (!checkbox.checked && !searchParams.has(key)) return;

		if (!searchParams.has(key)) {
			searchParams.set(key, value);
			setSearchParamsString(searchParams.toString());
			return;
		}

		if (!searchParams.get(key).includes(value)) {
			const values = [...searchParams.get(key).split('+'), value].join('+');
			searchParams.set(key, values);
			setSearchParamsString(searchParams.toString());
			return;
		}

		const textValue = searchParams.get(key).split('+');
		const filteredTextValue = textValue
			.filter((item) => !item.includes(value))
			.join('+');

		filteredTextValue.length != 0
			? searchParams.set(key, filteredTextValue)
			: searchParams.delete(key);
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
					<Icon name='stack' />
					<p className={styles.title}>Теги технологий</p>
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
				{technologyTags.map((item, i) => (
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
