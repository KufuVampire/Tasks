import { Checkbox, Icon } from '@/components';
import { SEARCH_PARAMS } from '@/constants';
import { partTimeWork } from '@/data';
import { useSearchParams } from '@/hooks';
import { cn } from '@/utils';
import { useEffect, useState } from 'react';
import styles from '../styles.module.css';

const eveningValue = 'вечерний';

export const PartTimeWork = () => {
	const [isOpen, setOpen] = useState(false);
	const [filtersCount, setFiltersCount] = useState(0);

	const { searchParams, searchParamsString, setSearchParamsString } =
		useSearchParams();

	useEffect(() => {
		const isEvening = searchParams
			.getAll(SEARCH_PARAMS.text)
			.includes('вечерний');

		const partTimeCount = searchParams.getAll(SEARCH_PARAMS.part_time).length;
		const count = isEvening ? partTimeCount + 1 : partTimeCount;

		setFiltersCount(count);
	}, [searchParamsString]);

	const handleClick = (e) => {
		const checkbox = e.target.closest('input');
		if (!checkbox) return;

		const key = checkbox.dataset.searchkey ? checkbox.dataset.searchkey : '';
		const value = checkbox.dataset.value ? checkbox.dataset.value : '';

		if (!checkbox.checked && !searchParams.has(key)) return;

		if (value === eveningValue && !searchParams.has(key)) {
			searchParams.set(key, value);
			setSearchParamsString(searchParams.toString());
			return;
		}

		if (value === eveningValue && !searchParams.get(key).includes(value)) {
			const values = [...searchParams.get(key).split('+'), value].join('+');
			searchParams.set(key, values);
			setSearchParamsString(searchParams.toString());
			return;
		}

		if (value === eveningValue && searchParams.get(key).includes(value)) {
			const textValue = searchParams.get(key).split('+');
			const filteredTextValue = textValue
				.filter((item) => !item.includes(value))
				.join('+');

			filteredTextValue.length != 0
				? searchParams.set(key, filteredTextValue)
				: searchParams.delete(key);
			setSearchParamsString(searchParams.toString());
			return;
		}

		if (!checkbox.checked && searchParams.has(key, value)) {
			searchParams.delete(key, value);
			setSearchParamsString(searchParams.toString());
			return;
		}

		searchParams.append(key, value);
		setSearchParamsString(searchParams.toString());
	};

	return (
		<li className={cn([styles.item], { [styles.active]: isOpen })}>
			<button
				className={styles.btn}
				onClick={() => setOpen((prev) => !prev)}>
				<div className={styles.wrapper}>
					<Icon name="tome-job" />
					<p className={styles.title}>Подработка</p>
				</div>
				<div className={styles.wrapper__right}>
					{filtersCount != 0 && (
						<span className={styles.count}>{filtersCount}</span>
					)}
					<Icon
						name="arrow-right"
						className={styles.icon}
					/>
				</div>
			</button>
			<ul
				onClick={handleClick}
				className={cn([styles.dropdown__list], {
					[styles.active__list]: isOpen,
				})}>
				{partTimeWork.map((item, i) => (
					<li
						className={styles.dropdown__item}
						key={i}>
						<Checkbox
							data-searchkey={item.dataSearchKey}
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
