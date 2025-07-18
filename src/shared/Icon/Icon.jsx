import {
	ArrowDownIcon,
	ArrowRightIcon,
	BriefcaseIcon,
	BurgerIcon,
	CalendarIcon,
	CheckmarkIcon,
	ClockIcon,
	CrossIcon,
	ExperienceIcon,
	EyeSlashSolidIcon,
	EyeSolidIcon,
	FilterSolidIcon,
	GraduationIcon,
	LocationIcon,
	Logo,
	MoreFiltersIcon,
	SalaryIcon,
	StackIcon,
	TomeJobIcon,
} from './icons';

const iconConfig = {
	arrowDown: ArrowDownIcon,
	arrowRight: ArrowRightIcon,
	briefcase: BriefcaseIcon,
	burger: BurgerIcon,
	calendar: CalendarIcon,
	checkmark: CheckmarkIcon,
	clock: ClockIcon,
	cross: CrossIcon,
	experience: ExperienceIcon,
	eyeSlashSolid: EyeSlashSolidIcon,
	eyeSolid: EyeSolidIcon,
	filterSolid: FilterSolidIcon,
	graduation: GraduationIcon,
	location: LocationIcon,
	logo: Logo,
	moreFilters: MoreFiltersIcon,
	salary: SalaryIcon,
	stack: StackIcon,
	tomeJob: TomeJobIcon,
};

/**
 *
 * @property {'arrow-down' | 'arrowRight' | 'briefcase' | 'burger' | 'calendar' | 'checkmark' | 'clock' | 'cross' | 'experience' | 'eyeSlashSolid' | 'eyeSolid' | 'filterSolid' | 'graduation' | 'location' | 'logo' | 'moreFilters' | 'salary' | 'stack' | 'tomeJob'} name - Имя иконки
 */
export const Icon = ({ name, ...props }) => {
	const SVGIcon = iconConfig[name];
	return <SVGIcon {...props} />;
};
