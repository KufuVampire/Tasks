import { SEARCH_PARAMS } from '@/constants';

export const dateOfPublication = [
	{
		text: 'За всё время',
		name: SEARCH_PARAMS.period,
		dataValue: '',
		dataName: SEARCH_PARAMS.period,
	},
	{
		text: 'За месяц',
		name: SEARCH_PARAMS.period,
		dataValue: '30',
		dataName: SEARCH_PARAMS.period,
	},
	{
		text: 'За неделю',
		name: SEARCH_PARAMS.period,
		dataValue: '7',
		dataName: SEARCH_PARAMS.period,
	},
	{
		text: 'За последние 3 дня',
		name: SEARCH_PARAMS.period,
		dataValue: '3',
		dataName: SEARCH_PARAMS.period,
	},
	{
		text: 'За сутки',
		name: SEARCH_PARAMS.period,
		dataValue: '1',
		dataName: SEARCH_PARAMS.period,
	},
];
