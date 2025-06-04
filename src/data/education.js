import { SEARCH_PARAMS } from '@/constants';

export const education = [
	{
		text: 'Не требует или не указано',
		name: SEARCH_PARAMS.education,
		dataValue: 'not_required_or_not_specified',
		dataSearchKey: SEARCH_PARAMS.education,
	},
	{
		text: 'Среднее профессиональное',
		name: SEARCH_PARAMS.education,
		dataValue: 'special_secondary',
		dataSearchKey: SEARCH_PARAMS.education,
	},
	{
		text: 'Высшее',
		name: SEARCH_PARAMS.education,
		dataValue: 'higher',
		dataSearchKey: SEARCH_PARAMS.education,
	},
];
