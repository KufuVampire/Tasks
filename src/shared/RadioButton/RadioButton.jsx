import { useSearchParamsStore } from '@/store';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const RadioButton = ({ text, ...props }) => {
	const [selected, setSelected] = useState('');
	const { searchParams, searchParamsString } = useSearchParamsStore();

	const filterName = props['data-name'];
	const filterValue = props['data-value'];

	useEffect(() => {
		if (searchParams.has(filterName)) {
			const current = searchParams.get(filterName);
			setSelected(current);
		} else {
			setSelected('');
		}
	}, [searchParamsString, filterName]);

	return (
		<label className={styles.label}>
			<input
				type="radio"
				className={styles.radio}
				checked={selected === filterValue}
				onChange={() => setSelected(filterValue)}
				{...props}
			/>
			<span className={styles.text}>{text}</span>
		</label>
	);
};
