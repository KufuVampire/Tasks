import { Icon } from '@/components';
import { useHiddenVacanciesStore } from '@/store';
import { formatExperience, formatSalary } from '@/utils';

import styles from './styles.module.css';

export const RelatedVacancyCard = ({ item }) => {
	const { hiddenVacanciesIds, setVacancyHidden, removeVacancyFromHidden } =
		useHiddenVacanciesStore();

	const handleHideVacancy = (id) => {
		if (hiddenVacanciesIds.includes(id)) removeVacancyFromHidden(id);

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
						name="experience"
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
				name="eye-slash-solid"
				className={styles.icon__eye}
				onClick={() => handleHideVacancy(item.id)}
			/>
		</li>
	);
};
