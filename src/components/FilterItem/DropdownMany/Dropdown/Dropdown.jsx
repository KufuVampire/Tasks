import { AdditionalFiltersTypes } from '@/constants';

import { DateOfPublication } from './DateOfPublication/DateOfPublication';
import { Education } from './Education/Education';
import { Experience } from './Experience/Experience';
import { IncomeLevel } from './IncomeLevel/IncomeLevel';
import { OtherParameters } from './OtherParameters/OtherParameters';
import { PartTimeWork } from './PartTimeWork/PartTimeWork';
import { TechnologyTags } from './TechnologyTags/TechnologyTags';
import { WorkSchedule } from './WorkSchedule/WorkSchedule';

export const Dropdown = ({ type }) => {
	switch (type) {
		case AdditionalFiltersTypes.dateOfPublication:
			return <DateOfPublication />;
		case AdditionalFiltersTypes.experience:
			return <Experience />;
		case AdditionalFiltersTypes.workSchedule:
			return <WorkSchedule />;
		case AdditionalFiltersTypes.technologyTags:
			return <TechnologyTags />;
		case AdditionalFiltersTypes.education:
			return <Education />;
		case AdditionalFiltersTypes.incomeLevel:
			return <IncomeLevel />;
		case AdditionalFiltersTypes.partTimeWork:
			return <PartTimeWork />;
		case AdditionalFiltersTypes.otherParameters:
			return <OtherParameters />;
	}
};
