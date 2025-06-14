import { SEARCH_PARAMS } from '@/constants';

export const incomeLevel = [
	{
		text: 'Не имеет значения',
		name: SEARCH_PARAMS.salary,
		dataValue: '',
		dataName: SEARCH_PARAMS.salary,
	},
	{
		text: 'От 25 000 ₽',
		name: SEARCH_PARAMS.salary,
		dataValue: '25000',
		dataName: SEARCH_PARAMS.salary,
	},
	{
		text: 'От 50 000 ₽',
		name: SEARCH_PARAMS.salary,
		dataValue: '50000',
		dataName: SEARCH_PARAMS.salary,
	},
	{
		text: 'От 100 000 ₽',
		name: SEARCH_PARAMS.salary,
		dataValue: '100000',
		dataName: SEARCH_PARAMS.salary,
	},
	{
		text: 'От 150 000 ₽',
		name: SEARCH_PARAMS.salary,
		dataValue: '150000',
		dataName: SEARCH_PARAMS.salary,
	},
	{
		text: 'Указан доход',
		name: SEARCH_PARAMS.salary,
		dataValue: 'true',
		dataName: SEARCH_PARAMS.only_with_salary,
	},
];
