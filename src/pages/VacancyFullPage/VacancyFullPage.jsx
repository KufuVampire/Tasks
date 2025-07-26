import { getVacancyById } from '@/api';
import { Container, Main, VacancyFullSkeleton } from '@/shared';
import { useVacancyStore } from '@/store';
import { useEffect, useState } from 'react';

import { formatSalary } from '@/utils';

import { Company } from './Company/Company';
import { GobackLink } from './GobackLink/GobackLink';
import { KeySkills } from './KeySkills/KeySkills';
import { RenderingDescriptionFromProps } from './RenderingDescriptionFromProps/RenderingDescriptionFromProps';
import { Requirements } from './Requirements/Requirements';
import { ToggleVacancyVisibilityButton } from './ToggleVacancyVisibilityButton/ToggleVacancyVisibilityButton';

import { RelatedVacanciesList } from '@/modules';
import styles from './styles.module.css';

export const VacancyFullPage = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	const { vacancyId } = useVacancyStore();

	useEffect(() => {
		window.scrollTo(0, 0);
		(async () => {
			try {
				const data = await getVacancyById(vacancyId);

				if (data.errors) {
					throw new Error(`Не удалось найти вакансию с id: ${vacancyId}`);
				}

				setData(data);
				setLoading(false);
			} catch (error) {
				console.error(error);
				setError(error);
			}
		})();
	}, [vacancyId]);

	if (error) {
		return (
			<Main>
				<section className={styles.vacancy__section}>
					<Container className={styles.vacancy__container}>
						<GobackLink />
						<div className={styles.card}>{error.message}</div>
					</Container>
				</section>
			</Main>
		);
	}

	return (
		<Main>
			<section className={styles.vacancy__section}>
				<Container className={styles.vacancy__container}>
					<GobackLink />
					<div className={styles.wrapper}>
						{isLoading && !error ? (
							<VacancyFullSkeleton />
						) : (
							<>
								<div className={styles.card}>
									<h1 className={styles.title}>{data.name}</h1>
									<p className={styles.salary}>{formatSalary(data.salary)}</p>
									<Requirements data={data} />
									<ToggleVacancyVisibilityButton id={vacancyId} />
									<RenderingDescriptionFromProps
										description={data.description}
									/>
									<KeySkills keySkills={data.key_skills} />
									<p className={styles.published_at}>
										{`Вакансия опубликована ${new Date(data.published_at)
											.toLocaleString('ru', {
												day: 'numeric',
												month: 'long',
												year: 'numeric',
											})
											.slice(0, -3)} в г. ${data.area.name}`}
									</p>
								</div>
								<Company
									employer={data.employer}
									address={data.address}
								/>
							</>
						)}
					</div>
				</Container>
			</section>
			<RelatedVacanciesList />
		</Main>
	);
};
