import { SearchFilter } from './SearchFilter/SearchFilter';
import { AdditionalFiltersDropdown } from './AdditionalFiltersDropdown/AdditionalFiltersDropdown';
import { EmploymentsFilterDropdown } from './EmploymentsFilterDropdown/EmploymentsFilterDropdown';

const filtersConfig = {
	searchFilter: SearchFilter,
	employmentsFilterDropdown: EmploymentsFilterDropdown,
	additionalFiltersDropdown: AdditionalFiltersDropdown,
};

export const FilterItem = ({ type }) => {
	const Filter = filtersConfig[type];
	return <Filter />;
};
