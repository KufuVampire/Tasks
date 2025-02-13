import { ArrowDownIcon, ArrowRightIcon, BriefcaseIcon, CalendarIcon, ClockIcon, CrossIcon, ExperienceIcon, EyeSlashSolidIcon, FilterSolidIcon, GraduationIcon, LocationIcon, Logo, MoreFiltersIcon, SalaryIcon, StackIcon, TomeJobIcon } from "./icons"

export const Icon = ({ name, ...props }) => {
	const iconConfig = {
		['arrow-down']: <ArrowDownIcon {...props} />,
		['arrow-right']: <ArrowRightIcon {...props} />,
		['briefcase']: <BriefcaseIcon {...props} />,
		['calendar']: <CalendarIcon {...props} />,
		['clock']: <ClockIcon {...props} />,
		['cross']: <CrossIcon {...props} />,
		['experience']: <ExperienceIcon {...props} />,
		['eye-slash-solid']: <EyeSlashSolidIcon {...props} />,
		['filter-solid']: <FilterSolidIcon {...props} />,
		['graduation']: <GraduationIcon {...props} />,
		['location']: <LocationIcon {...props} />,
		['logo']: <Logo {...props} />,
		['more-filters']: <MoreFiltersIcon {...props} />,
		['salary']: <SalaryIcon {...props} />,
		['stack']: <StackIcon {...props} />,
		['tome-job']: <TomeJobIcon {...props} />,
	}

	return iconConfig[name]
}