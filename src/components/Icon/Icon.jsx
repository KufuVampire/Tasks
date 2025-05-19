import { ArrowDownIcon, ArrowRightIcon, BriefcaseIcon, CalendarIcon, CheckmarkIcon, ClockIcon, CrossIcon, ExperienceIcon, EyeSlashSolidIcon, EyeSolidIcon, FilterSolidIcon, GraduationIcon, LocationIcon, Logo, MoreFiltersIcon, SalaryIcon, StackIcon, TomeJobIcon } from "./icons"

const iconConfig = {
	['arrow-down']: ArrowDownIcon,
	['arrow-right']: ArrowRightIcon,
	['briefcase']: BriefcaseIcon,
	['calendar']: CalendarIcon,
	['checkmark']: CheckmarkIcon,
	['clock']: ClockIcon,
	['cross']: CrossIcon,
	['experience']: ExperienceIcon,
	['eye-slash-solid']: EyeSlashSolidIcon,
	['eye-solid']: EyeSolidIcon,
	['filter-solid']: FilterSolidIcon,
	['graduation']: GraduationIcon,
	['location']: LocationIcon,
	['logo']: Logo,
	['more-filters']: MoreFiltersIcon,
	['salary']: SalaryIcon,
	['stack']: StackIcon,
	['tome-job']: TomeJobIcon,
}

/**
 * 
 * @property {'arrow-down' | 'arrow-right' | 'briefcase' | 'calendar' | 'checkmark' | 'clock' | 'cross' | 'experience' | 'eye-slash-solid' | 'eye-solid' | 'filter-solid' | 'graduation' | 'location' | 'logo' | 'more-filters' | 'salary' | 'stack' | 'tome-job'} name - Имя иконки
 */
export const Icon = ({ name, ...props }) => {
	const SVGIcon = iconConfig[name];
	return <SVGIcon {...props} />
}