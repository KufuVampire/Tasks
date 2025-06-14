import { useEffect, useState } from 'react';

export const useDebounce = (value, delay = 500) => {
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(() => {
		const debounceId = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => clearTimeout(debounceId);
	}, [value]);

	return debounceValue;
};
