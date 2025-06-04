import { Icon } from '@/components';
import { SEARCH_PARAMS } from '@/constants';
import { useClickOutside, useDebounce, useSearchParams } from '@/hooks';
import { cn } from '@/utils';
import { useEffect, useRef, useState } from 'react';

import { InputDrowdown } from './InputDrowdown/InputDrowdown';
import styles from './styles.module.css';

export const Input = () => {
	const [isActive, setActive] = useState(false);
	const [areasCount, setAreasCount] = useState(0);
	const [value, setValue] = useState('');

	const inputRef = useRef(null);

	const { searchParams, searchParamsString } = useSearchParams();
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
			<div className={styles.wrapper}>
				<Icon
					name="location"
					className={styles.icon}
				/>
				<input
					className={styles.input}
					type="text"
					placeholder="Город"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
			<div className={styles.wrapper__right}>
				{areasCount.length != 0 && (
					<span className={styles.count}>{areasCount.length}</span>
				)}
				{value && (
					<Icon
						name="cross"
						className={cn([styles.icon, styles.cross__icon])}
						onClick={() => setValue('')}
					/>
				)}
			</div>
			{isActive && <InputDrowdown value={debounceValue} />}
		</li>
	);
};
