import { SEARCH_PARAMS } from '@/constants';

export const dateOfPublication = [
	{
		text: 'За всё время',
		name: SEARCH_PARAMS.period,
		dataValue: '',
		dataSearchKey: SEARCH_PARAMS.period,
	},
	{
		text: 'За месяц',
		name: SEARCH_PARAMS.period,
		dataValue: '30',
		dataSearchKey: SEARCH_PARAMS.period,
	},
	{
		text: 'За неделю',
		name: SEARCH_PARAMS.period,
		dataValue: '7',
		dataSearchKey: SEARCH_PARAMS.period,
	},
	{
		text: 'За последние 3 дня',
		name: SEARCH_PARAMS.period,
		dataValue: '3',
		dataSearchKey: SEARCH_PARAMS.period,
	},
	{
		text: 'За сутки',
		name: SEARCH_PARAMS.period,
		dataValue: '1',
		dataSearchKey: SEARCH_PARAMS.period,
	},
];
