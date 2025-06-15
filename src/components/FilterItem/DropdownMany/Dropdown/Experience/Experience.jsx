import { Icon, RadioButton } from '@/components';
import { experience } from '@/config';
import { useSearchParamsStore } from '@/store';
import { cn } from '@/utils';
import { useState } from 'react';
import styles from '../styles.module.css';

export const Experience = (props) => {
	const [isOpen, setOpen] = useState(false);
	const { searchParams, setSearchParamsString } = useSearchParamsStore();

	const handleClick = (e) => {
		const radio = e.target.closest('input');
		if (!radio) return;

		const key = radio.dataset.name ? radio.dataset.name : '';
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
		<li
			{...props}
			className={cn([styles.item], { [styles.active]: isOpen })}>
			<button
				className={styles.btn}
				onClick={() => setOpen((prev) => !prev)}>
				<div className={styles.wrapper}>
					<Icon name='experience' />
					<p className={styles.title}>Опыт работы</p>
				</div>
				<Icon
					name='arrow-right'
					className={styles.icon}
				/>
			</button>
			<ul
				onClick={handleClick}
				className={cn([styles.dropdown__list], {
					[styles.active__list]: isOpen,
				})}>
				{experience.map((item, i) => (
					<li
						className={styles.dropdown__item}
						key={i}>
						<RadioButton
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
