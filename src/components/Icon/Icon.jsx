import { ArrowRightIcon, BriefcaseIcon, ExperienceIcon, EyeSlashSolidIcon, FilterSolidIcon, LocationIcon, Logo } from "./icons"

export const Icon = ({ name, ...props }) => {
	const iconConfig = {
		['arrow-right']: <ArrowRightIcon {...props} />,
		['briefcase']: <BriefcaseIcon {...props} />,
		['experience']: <ExperienceIcon {...props} />,
		['eye-slash-solid']: <EyeSlashSolidIcon {...props} />,
		['filter-solid']: <FilterSolidIcon {...props} />,
		['location']: <LocationIcon {...props} />,
		['logo']: <Logo {...props} />,
	}

	return iconConfig[name]
}
