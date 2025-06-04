import { Checkbox, Icon, RadioButton } from '@/components';
import { SEARCH_PARAMS } from '@/constants';
import { incomeLevel } from '@/data';
import { useSearchParams } from '@/hooks';
import { cn } from '@/utils';
import { useEffect, useState } from 'react';
import styles from '../styles.module.css';

export const IncomeLevel = () => {
	const [isOpen, setOpen] = useState(false);
	const [filtersCount, setFiltersCount] = useState(0);
	const { searchParams, searchParamsString, setSearchParamsString } =
		useSearchParams();

	useEffect(() => {
		const salaryCount = searchParams.getAll(SEARCH_PARAMS.salary).length;
		const onlyWithSalaryCount = searchParams.getAll(
			SEARCH_PARAMS.only_with_salary,
		).length;
		const count = salaryCount + onlyWithSalaryCount;

		setFiltersCount(count);
	}, [searchParamsString]);

	const handleClick = (e) => {
		const input = e.target.closest('input');
		const isCheckbox =
			input instanceof HTMLInputElement && input.type === 'checkbox';
		if (!input) return;

		const key = input.dataset.searchkey ? input.dataset.searchkey : '';
		const value = input.dataset.value ? input.dataset.value : '';

		if (isCheckbox && !input.checked && !searchParams.has(key)) return;

		if (value.length < 1) {
			searchParams.delete(key);
			setSearchParamsString(searchParams.toString());
			return;
		}

		if (isCheckbox && input.checked) {
			searchParams.set(key, value);
			setSearchParamsString(searchParams.toString());
			return;
		}

		if (isCheckbox && !input.checked) {
			searchParams.delete(key);
			setSearchParamsString(searchParams.toString());
			return;
		}

		searchParams.set(key, value);
		setSearchParamsString(searchParams.toString());
	};

	return (
		<li className={cn([styles.item], { [styles.active]: isOpen })}>
			<button
				className={styles.btn}
				onClick={() => setOpen((prev) => !prev)}>
				<div className={styles.wrapper}>
					<Icon name="salary" />
					<p className={styles.title}>Уровень дохода</p>
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
				{incomeLevel.map((item, i) => {
					if (i === incomeLevel.length - 1) {
						return (
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
						);
					}

					return (
						<li
							className={styles.dropdown__item}
							key={i}>
							<RadioButton
								data-searchkey={item.dataSearchKey}
								data-value={item.dataValue}
								text={item.text}
								name={item.name}
							/>
						</li>
					);
				})}
			</ul>
		</li>
	);
};
