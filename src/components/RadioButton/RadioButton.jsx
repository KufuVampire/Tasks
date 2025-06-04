import { useSearchParams } from '@/hooks';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const RadioButton = ({ text, ...props }) => {
	const { searchParams, searchParamsString } = useSearchParams();
	const [selected, setSelected] = useState('');

	const filterKey = props['data-searchkey'];
	const filterValue = props['data-value'];

	useEffect(() => {
		if (searchParams.has(filterKey)) {
			const current = searchParams.get(filterKey);
			setSelected(current);
		} else {
			setSelected('');
		}
	}, [searchParamsString, filterKey]);

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
