import { Icon } from '@/components';
import { SEARCH_PARAMS } from '@/constants';
import { useSearchParamsStore } from '@/store';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

export const Checkbox = ({ text, ...props }) => {
	const [isChecked, setChecked] = useState(false);
	const { searchParams, searchParamsString } = useSearchParamsStore();
	const inputRef = useRef(null);

	useEffect(() => {
		if (!inputRef.current) return;

		const { dataset } = inputRef.current;
		const key = dataset.name ? dataset.name : '';
		const value = dataset.value ? dataset.value : '';

		if (searchParams.has(key, value)) {
			setChecked(true);
		} else if (SEARCH_PARAMS.text === key && searchParams.has(key)) {
			setChecked(searchParams.get(key).includes(value));
		} else {
			setChecked(false);
		}
	}, [searchParamsString]);

	return (
		<label className={styles.label}>
			<div className={styles.wrapper}>
				<input
					ref={inputRef}
					type="checkbox"
					className={styles.checkbox__input}
					checked={isChecked}
					onChange={(e) => setChecked(e.target.checked)}
					{...props}
				/>
				<Icon
					name="checkmark"
					className={styles.checkbox}
				/>
			</div>
			<span className={styles.text}>{text}</span>
		</label>
	);
};
