import { Icon, RadioButton } from '@/components';
import { dateOfPublication } from '@/data';
import { useSearchParams } from '@/hooks';
import { cn } from '@/utils';
import { useState } from 'react';
import styles from '../styles.module.css';

export const DateOfPublication = () => {
	const [isOpen, setOpen] = useState(false);
	const { searchParams, setSearchParamsString } = useSearchParams();

	const handleClick = (e) => {
		const radio = e.target.closest('input');

		if (!radio) return;

		const key = radio.dataset.searchkey ? radio.dataset.searchkey : '';
		const value = radio.dataset.value ? radio.dataset.value : '';

		if (value.length < 1) {
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
					<Icon name="calendar" />
					<p className={styles.title}>Дата публикации вакансий</p>
				</div>
				<Icon
					name="arrow-right"
					className={styles.icon}
				/>
			</button>
			<ul
				onClick={handleClick}
				className={cn([styles.dropdown__list], {
					[styles.active__list]: isOpen,
				})}>
				{dateOfPublication.map((item, i) => (
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
				))}
			</ul>
		</li>
	);
};
