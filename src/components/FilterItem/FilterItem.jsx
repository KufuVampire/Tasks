import { useState } from 'react';
import { Input } from './Input/Input';

import { PropTypes } from '@/constants'

import { DropdownMany } from './DropdownMany/DropdownMany';
import { DropdownSingle } from './DropdownSingle/DropdownSingle';

export const FilterItem = ({ iconName, text, type, additionalFilters }) => {
	const [value, setValue] = useState('');

	switch (type) {
		case PropTypes.input:
			return (
				<Input iconName={iconName} text={text} value={value} setValue={setValue} />
			)
		case PropTypes.dropdownSingle:
			return (
				<DropdownSingle iconName={iconName} text={text} filters={additionalFilters} />
			)
		case PropTypes.dropdownMany:
			return (
				<DropdownMany iconName={iconName} text={text} filters={additionalFilters} />
			)
	}
}
