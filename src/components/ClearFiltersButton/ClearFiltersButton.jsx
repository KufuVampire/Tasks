import { useSearchParamsStore } from '@/store';
import { cn } from '@/utils';
import styles from './styles.module.css';

export const ClearFiltersButton = () => {
	const { searchParams, setSearchParamsString } = useSearchParamsStore();

	const handleClear = () => {
		const allKeys = new Set(searchParams.keys());
		allKeys.forEach((key) => searchParams.delete(key));

		setSearchParamsString(searchParams.toString());
	};

	return (
		<button
			className={cn([styles.btn], {
				[styles.hidden]: searchParams.size < 1,
			})}
			onClick={handleClear}>
			Сбросить все фильтры
		</button>
	);
};
