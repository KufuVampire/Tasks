import { useEffect, useState } from "react"
import { getVacancyById } from "@/api";
import { Container } from "@/components";
import { useVacancy } from '@/hooks'

import { formatSalary } from "@/utils";

import { GobackLink } from "./GobackLink/GobackLink";
import { Company } from "./Company/Company";
import { Requirements } from "./Requirements/Requirements";
import { KeySkills } from "./KeySkills/KeySkills";
import { ToggleVacancyVisibilityButton } from "./ToggleVacancyVisibilityButton/ToggleVacancyVisibilityButton";
import { Description } from "./Description/Description";

import styles from './styles.module.css';

export const VacancyCardFull = () => {
	const { vacancyId, setOpen } = useVacancy();
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [error, setError] = useState('');

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const data = await getVacancyById(vacancyId);

				setData(data);
				setLoading(false);
			} catch (error) {
				console.error(error);
				setError('Не удалось найти данные о вашей вакансии');
			}
		})();
	}, [getVacancyById]);

	if (error) {
		return (
			<section className={styles.vacancy__section}>
				<Container className={styles.vacancy__container}>{error}</Container>
			</section>
		)
	}

	return (
		<section className={styles.vacancy__section}>
			{isLoading ? (
				<Container className={styles.vacancy__container}>Загрузка</Container>
			) : (
				<Container className={styles.vacancy__container}>
					<GobackLink setOpen={setOpen} />
					<div className={styles.wrapper}>
						<div className={styles.card}>
							<h1 className={styles.title}>{data.name}</h1>
							<p className={styles.salary}>{formatSalary(data.salary)}</p>
							<Requirements data={data} />
							<ToggleVacancyVisibilityButton id={vacancyId} />
							<Description description={data.description} />
							<KeySkills keySkills={data.key_skills} />
							<p className={styles.published_at}>{`Вакансия опубликована ${new Date(data.published_at).toLocaleString("ru", { day: "numeric", month: "long", year: "numeric" }).slice(0, -3)} в г. ${data.area.name}`}</p>
						</div>
						<Company employer={data.employer} address={data.address} />
					</div>
				</Container>
			)}
		</section>
	)
}
