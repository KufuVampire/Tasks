import { SEARCH_PARAMS } from '@/constants';

export const workSchedule = [
	{
		text: 'Полный день',
		name: SEARCH_PARAMS.schedule,
		dataValue: 'fullDay',
		dataName: SEARCH_PARAMS.schedule,
	},
	{
		text: 'Вахтовый метод',
		name: SEARCH_PARAMS.schedule,
		dataValue: 'flyInFlyOut',
		dataName: SEARCH_PARAMS.schedule,
	},
	{
		text: 'Сменный график',
		name: SEARCH_PARAMS.schedule,
		dataValue: 'shift',
		dataName: SEARCH_PARAMS.schedule,
	},
	{
		text: 'Гибкий график',
		name: SEARCH_PARAMS.schedule,
		dataValue: 'flexible',
		dataName: SEARCH_PARAMS.schedule,
	},
	{
		text: 'Удаленная работа',
		name: SEARCH_PARAMS.schedule,
		dataValue: 'remote',
		dataName: SEARCH_PARAMS.schedule,
	},
];
