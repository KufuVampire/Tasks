import { SEARCH_PARAMS } from '@/constants';

export const experience = [
	{
		text: 'Не имеет значения',
		name: SEARCH_PARAMS.experience,
		dataValue: '',
		dataName: SEARCH_PARAMS.experience,
	},
	{
		text: 'Нет опыта',
		name: SEARCH_PARAMS.experience,
		dataValue: 'noExperience',
		dataName: SEARCH_PARAMS.experience,
	},
	{
		text: 'От 1 года до 3 лет',
		name: SEARCH_PARAMS.experience,
		dataValue: 'between1And3',
		dataName: SEARCH_PARAMS.experience,
	},
	{
		text: 'От 3 до 6 лет',
		name: SEARCH_PARAMS.experience,
		dataValue: 'between3And6',
		dataName: SEARCH_PARAMS.experience,
	},
	{
		text: 'Более 6 лет',
		name: SEARCH_PARAMS.experience,
		dataValue: 'moreThan6',
		dataName: SEARCH_PARAMS.experience,
	},
];
