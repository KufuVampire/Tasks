import { FilterItem } from '../FilterItem/FilterItem'
import styles from './styles.module.css'

const DROPDOWN_SINGLE_FILTERS = { type: 'checkbox', items: ['Полная занятость', 'Частичная занятость', 'Стажировка', 'Проектная работа'] }

const DROPDOWN_MANY_FILTERS = [
	{ iconName: 'calendar', text: 'Дата публикации вакансий', type: 'radio', items: ["За всё время", "За месяц", "За неделю", "За последние 3 дян", "За сутки"] },
	{ iconName: 'experience', text: 'Опыт работы', type: 'radio', items: ["Не имеет значения", "Нет опыта", "От 1 года до 3 лет", "От 3 до 6 лет", "Более 6 лет",] },
	{ iconName: 'clock', text: 'График работы', type: 'checkbox', items: ['Полный день', 'Вахтовый метод', 'Сменный график', 'Гибкий график', 'Удаленная работа'] },
	{ iconName: 'stack', text: 'Теги технологий', type: 'checkbox', items: ["jQuery", "JavaScript", "React", "Git", "Vue", "Flexbox", "HTML5", "CSS", "VS Code", "GitLab", "GitHub", "TypeScript"] },
	{ iconName: 'graduation', text: 'Образование', type: 'checkbox', items: ["Не требует или не указано", "Среднее профессиональное", "Высшее"] },
	{ iconName: 'salary', text: 'Уровень дохода', type: 'mix', items: ["Не имеет значения", "От 25 000 ₽", "От 50 000 ₽", "От 100 000 ₽", "от 150 000 ₽", "Указан доход"] },
	{ iconName: 'tome-job', text: 'Подработка', type: 'checkbox', items: ["Неполный день", "От 4 часов в день", "По вечерам", "По выходным", "Разовые задания"] },
	{ iconName: 'more-filters', text: 'Другие параметры', type: 'checkbox', items: ["Доступные людям с инвалидностью", "Включая скрытые вакансии", "От аккредитиванных ИП компаний", "Без вакансий от кадровых агенст"] },
];

const FITLER_SETTINGS = [
	{ iconName: 'location', text: 'Город', type: 'input', additionalFilters: null },
	{ iconName: 'briefcase', text: 'Тип занятости', type: 'dropdown-single', additionalFilters: DROPDOWN_SINGLE_FILTERS },
	{ iconName: 'filter-solid', text: 'Дополнительные фильтры', type: 'dropdown-many', additionalFilters: DROPDOWN_MANY_FILTERS },
];

export const FilterList = () => {

	return (
		<ul className={styles.list}>
			{
				FITLER_SETTINGS.map(({ iconName, text, type, additionalFilters }, i) => (
					<FilterItem key={i} text={text} iconName={iconName} type={type} additionalFilters={additionalFilters} />
				))
			}
		</ul>
	)
}