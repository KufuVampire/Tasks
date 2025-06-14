import { SEARCH_PARAMS } from '@/constants';

export const partTimeWork = [
	{
		text: 'Неполный день',
		name: SEARCH_PARAMS.part_time,
		dataValue: 'part',
		dataName: SEARCH_PARAMS.part_time,
	},
	{
		text: 'От 4 часов в день',
		name: SEARCH_PARAMS.part_time,
		dataValue: 'from_four_to_six_hours_in_a_day',
		dataName: SEARCH_PARAMS.part_time,
	},
	{
		text: 'По вечерам',
		name: SEARCH_PARAMS.part_time,
		dataValue: 'вечерний',
		dataName: SEARCH_PARAMS.text,
	},
	{
		text: 'По выходным',
		name: SEARCH_PARAMS.part_time,
		dataValue: 'only_saturday_and_sunday',
		dataName: SEARCH_PARAMS.part_time,
	},
	{
		text: 'Разовые задания',
		name: SEARCH_PARAMS.part_time,
		dataValue: 'project',
		dataName: SEARCH_PARAMS.part_time,
	},
];
