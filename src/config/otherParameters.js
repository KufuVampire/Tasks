import { SEARCH_PARAMS } from '@/constants';

export const otherParameters = [
	{
		text: 'Доступные людям с инвалидностью',
		name: SEARCH_PARAMS.label,
		dataValue: 'accept_handicapped',
		dataName: SEARCH_PARAMS.label,
	},
	{
		text: 'Включая скрытые вакансии',
		name: SEARCH_PARAMS.label,
		dataValue: 'true',
		dataName: SEARCH_PARAMS.hidden,
	},
	{
		text: 'От аккредитиванных ИП компаний',
		name: SEARCH_PARAMS.label,
		dataValue: 'accredited_it',
		dataName: SEARCH_PARAMS.label,
	},
	{
		text: 'Без вакансий от кадровых агенст',
		name: SEARCH_PARAMS.label,
		dataValue: 'not_from_agency',
		dataName: SEARCH_PARAMS.label,
	},
];
