import { useState } from 'react';
import { Input } from './Input/Input';

import { DropdownMany } from './DropdownMany/DropdownMany';
import { DropdownSingle } from './DropdownSingle/DropdownSingle';

export const FilterItem = ({ iconName, text, type, additionalFilters }) => {
	const [value, setValue] = useState('');

	switch (type) {
		case 'input':
			return (
				<Input iconName={iconName} text={text} value={value} setValue={setValue} />
			)
		case 'dropdown-single':
			return (
				<DropdownSingle iconName={iconName} text={text} filters={additionalFilters} />
			)
		case 'dropdown-many':
			return (
				<DropdownMany iconName={iconName} text={text} filters={additionalFilters} />
			)
	}
}
