import { DateOfPublication } from './DateOfPublication/DateOfPublication';
import { Education } from './Education/Education';
import { Employments } from './Employments/Employments';
import { Experience } from './Experience/Experience';
import { IncomeLevel } from './IncomeLevel/IncomeLevel';
import { OtherParameters } from './OtherParameters/OtherParameters';
import { PartTimeWork } from './PartTimeWork/PartTimeWork';
import { TechnologyTags } from './TechnologyTags/TechnologyTags';
import { WorkSchedule } from './WorkSchedule/WorkSchedule';

const filtersDropdownConfig = {
	employments: Employments,
	dateOfPublication: DateOfPublication,
	experience: Experience,
	workSchedule: WorkSchedule,
	technologyTags: TechnologyTags,
	education: Education,
	incomeLevel: IncomeLevel,
	partTimeWork: PartTimeWork,
	otherParameters: OtherParameters,
};

export const Dropdown = ({ type }) => {
	const FilterDropdown = filtersDropdownConfig[type];
	return <FilterDropdown />;
};
