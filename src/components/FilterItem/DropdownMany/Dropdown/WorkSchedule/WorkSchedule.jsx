import { Checkbox, Icon } from '@/components';
import { SEARCH_PARAMS } from '@/constants';
import { workSchedule } from '@/data';
import { useSearchParams } from '@/hooks';
import { cn } from '@/utils';
import { useEffect, useState } from 'react';
import styles from '../styles.module.css';

export const WorkSchedule = () => {
	const [isOpen, setOpen] = useState(false);
	const [filtersCount, setFiltersCount] = useState(0);

	const { searchParams, searchParamsString, setSearchParamsString } =
		useSearchParams();

	useEffect(() => {
		const count = searchParams.getAll(SEARCH_PARAMS.schedule).length;
		setFiltersCount(count);
	}, [searchParamsString]);

	const handleClick = (e) => {
		const checkbox = e.target.closest('input');
		if (!checkbox) return;

		const key = checkbox.dataset.searchkey ? checkbox.dataset.searchkey : '';
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
		<li className={cn([styles.item], { [styles.active]: isOpen })}>
			<button
				className={styles.btn}
				onClick={() => setOpen((prev) => !prev)}>
				<div className={styles.wrapper}>
					<Icon name="clock" />
					<p className={styles.title}>График работы</p>
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
				{workSchedule.map((item, i) => (
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
