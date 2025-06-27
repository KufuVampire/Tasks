import styles from './styles.module.css';

export const KeySkills = ({ keySkills }) => {
	return (
		<>
			{keySkills.length !== 0 && (
				<h3 className={styles.title}>Ключевые навыки</h3>
			)}
			{keySkills.length !== 0 && (
				<ul className={styles.key__skills}>
					{
						keySkills.map((skill, i) => (
							<li key={i} className={styles.skill}>{skill.name}</li>
						))
					}
				</ul>
			)}
		</>
	)
}
