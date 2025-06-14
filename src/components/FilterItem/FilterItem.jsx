import { Input } from './Input/Input';

import { DropdownMany } from './DropdownMany/DropdownMany';
import { DropdownSingle } from './DropdownSingle/DropdownSingle';

const filtersConfig = {
	input: Input,
	dropdownSingle: DropdownSingle,
	dropdownMany: DropdownMany,
};

export const FilterItem = ({ type }) => {
	const Filter = filtersConfig[type];
	return <Filter />;
};
