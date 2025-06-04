import { SEARCH_PARAMS } from '@/constants';

export const partTimeWork = [
	{
		text: 'Неполный день',
		name: SEARCH_PARAMS.part_time,
		dataValue: 'part',
		dataSearchKey: SEARCH_PARAMS.part_time,
	},
	{
		text: 'От 4 часов в день',
		name: SEARCH_PARAMS.part_time,
		dataValue: 'from_four_to_six_hours_in_a_day',
		dataSearchKey: SEARCH_PARAMS.part_time,
	},
	{
		text: 'По вечерам',
		name: SEARCH_PARAMS.part_time,
		dataValue: 'вечерний',
		dataSearchKey: SEARCH_PARAMS.text,
	},
	{
		text: 'По выходным',
		name: SEARCH_PARAMS.part_time,
		dataValue: 'only_saturday_and_sunday',
		dataSearchKey: SEARCH_PARAMS.part_time,
	},
	{
		text: 'Разовые задания',
		name: SEARCH_PARAMS.part_time,
		dataValue: 'project',
		dataSearchKey: SEARCH_PARAMS.part_time,
	},
];
