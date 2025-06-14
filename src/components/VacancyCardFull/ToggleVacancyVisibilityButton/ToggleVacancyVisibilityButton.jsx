import { Icon } from '@/components';
import { useHiddenVacanciesStore } from '@/store';
import styles from './styles.module.css';

export const ToggleVacancyVisibilityButton = ({ id }) => {
	const { hiddenVacanciesIds, setVacancyHidden, removeVacancyFromHidden } =
		useHiddenVacanciesStore();
	const isVacancyHidden = hiddenVacanciesIds.includes(id);

	const handleToggleVacancyVisibility = (id) => {
		if (isVacancyHidden) {
			removeVacancyFromHidden(id);
			return;
		}

		setVacancyHidden(id);
	};

	return (
		<button
			className={styles.btn}
			onClick={() => handleToggleVacancyVisibility(id)}>
			{isVacancyHidden ? (
				<>
					<Icon
						name="eye-solid"
						className={styles.icon}
					/>
					<span>Показать</span>
				</>
			) : (
				<>
					<Icon
						name="eye-slash-solid"
						className={styles.icon}
					/>
					<span>Скрыть</span>
				</>
			)}
		</button>
	);
};
