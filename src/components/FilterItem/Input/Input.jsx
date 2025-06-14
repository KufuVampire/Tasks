import { Icon } from '@/components';
import { SEARCH_PARAMS } from '@/constants';
import { useClickOutside, useDebounce } from '@/hooks';
import { useSearchParamsStore } from '@/store';
import { cn } from '@/utils';
import { useEffect, useRef, useState } from 'react';

import { LiveSearchCity } from './LiveSearchCity/LiveSearchCity';
import styles from './styles.module.css';

export const Input = () => {
	const [isActive, setActive] = useState(false);
	const [areasCount, setAreasCount] = useState(0);
	const [value, setValue] = useState('');

	const inputRef = useRef(null);

	const { searchParams, searchParamsString } = useSearchParamsStore();
	const debounceValue = useDebounce(value.trim(), 1000);

	useClickOutside(inputRef, setActive);

	useEffect(() => {
		const areas = searchParams.getAll(SEARCH_PARAMS.area);
		setAreasCount(areas);
	}, [searchParamsString]);

	return (
		<li
			className={cn([styles.item], {
				[styles.active]: isActive,
			})}
			ref={inputRef}
			onClick={() => setActive(true)}>
			<label
				title='Поиск по городам и регионам'
				className={styles.wrapper}>
				<Icon
					name='location'
					className={styles.icon}
				/>
				<input
					className={styles.input}
					type='text'
					placeholder='Город'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</label>
			<div className={styles.wrapper__right}>
				{areasCount.length != 0 && (
					<span className={styles.count}>{areasCount.length}</span>
				)}
				{value && (
					<button
						className={styles.icon__btn}
						title='Очистить поле поиска'
						onClick={() => setValue('')}>
						<Icon
							name='cross'
							className={cn([styles.icon, styles.cross__icon])}
						/>
					</button>
				)}
			</div>
			{isActive && <LiveSearchCity value={debounceValue} />}
		</li>
	);
};
