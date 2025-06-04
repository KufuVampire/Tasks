import { Input } from './Input/Input';

import { FiltersTypes } from '@/constants';

import { DropdownMany } from './DropdownMany/DropdownMany';
import { DropdownSingle } from './DropdownSingle/DropdownSingle';

export const FilterItem = ({ type }) => {
	switch (type) {
		case FiltersTypes.input:
			return <Input />;
		case FiltersTypes.dropdownSingle:
			return <DropdownSingle />;
		case FiltersTypes.dropdownMany:
			return <DropdownMany />;
	}
};
