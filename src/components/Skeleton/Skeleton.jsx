import styles from './styles.module.css';

export const Skeleton = () => {

	return (
		<li className={styles.item}>
			<h3 className={styles.heading}></h3>
			<p className={styles.salary}></p>
			<p className={styles.company}></p>
			<p className={styles.city}></p>
			<div className={styles.wrapper}>
				<div className={styles.icon}></div>
				<p className={styles.experience}></p>
			</div>
		</li>
	)
}