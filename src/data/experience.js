import { SEARCH_PARAMS } from '@/constants';

export const experience = [
	{
		text: 'Не имеет значения',
		name: SEARCH_PARAMS.experience,
		dataValue: '',
		dataSearchKey: SEARCH_PARAMS.experience,
	},
	{
		text: 'Нет опыта',
		name: SEARCH_PARAMS.experience,
		dataValue: 'noExperience',
		dataSearchKey: SEARCH_PARAMS.experience,
	},
	{
		text: 'От 1 года до 3 лет',
		name: SEARCH_PARAMS.experience,
		dataValue: 'between1And3',
		dataSearchKey: SEARCH_PARAMS.experience,
	},
	{
		text: 'От 3 до 6 лет',
		name: SEARCH_PARAMS.experience,
		dataValue: 'between3And6',
		dataSearchKey: SEARCH_PARAMS.experience,
	},
	{
		text: 'Более 6 лет',
		name: SEARCH_PARAMS.experience,
		dataValue: 'moreThan6',
		dataSearchKey: SEARCH_PARAMS.experience,
	},
];
