import { Icon } from '@/components';
import { useHiddenVacanciesStore } from '@/store';
import { cn, formatExperience, formatSalary } from '@/utils';

import styles from './styles.module.css';

export const VacancyCard = ({ item }) => {
	const { hiddenVacanciesIds, setVacancyHidden, removeVacancyFromHidden } =
		useHiddenVacanciesStore();

	const isVacancyHidden = hiddenVacanciesIds.includes(item.id);

	const handleToggleVacancyVisibility = (id) => {
		if (isVacancyHidden) {
			removeVacancyFromHidden(id);
			return;
		}

		setVacancyHidden(id);
	};

	return (
		<li className={styles.item}>
			<button
				className={styles.btn}
				data-id={item.id}>
				<h3 className={styles.heading}>{item.name}</h3>
				<p className={styles.salary}>{formatSalary(item.salary)}</p>
				<p className={styles.company}>{item.employer.name}</p>
				<p className={styles.city}>{item.area.name}</p>
				<div className={styles.wrapper}>
					<Icon
						name='experience'
						width={12}
						height={12}
						className={styles.icon__star}
					/>
					<p className={styles.experience}>
						{formatExperience(item.experience)}
					</p>
				</div>
			</button>
			<Icon
				name='eye-slash-solid'
				className={cn([styles.icon__eye], {
					[styles.active]: isVacancyHidden,
				})}
				onClick={() => handleToggleVacancyVisibility(item.id)}
			/>
		</li>
	);
};
