export const FiltersTypes = {
	input: 'input',
	dropdownSingle: 'dropdown-single',
	dropdownMany: 'dropdown-many',
};

export const AdditionalFiltersTypes = {
	dateOfPublication: 'date of publication',
	experience: 'experience',
	workSchedule: 'work schedule',
	technologyTags: 'technology tags',
	education: 'education',
	incomeLevel: 'income level',
	partTimeWork: 'part-time work',
	otherParameters: 'other parameters',
};

export const API_URL = {
	vacancies: import.meta.env.PUBLIC_VACANCIES_API_URL,
	areas: import.meta.env.PUBLIC_AREAS,
};

export const SEARCH_PARAMS = {
	per_page: 'per_page',
	page: 'page',
	order_by: 'order_by',
	period: 'period',
	experience: 'experience',
	schedule: 'schedule',
	text: 'text',
	education: 'education',
	salary: 'salary',
	only_with_salary: 'only_with_salary',
	part_time: 'part_time',
	employment: 'employment',
	label: 'label',
	area: 'area',
	hidden: 'hidden',
};

export const PER_PAGE_VACANCIES = 18;
export const PER_PAGE_RELATED_VACANCIES = 6;
