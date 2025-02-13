import styles from './styles.module.css'

export const Checkbox = ({ text }) => {

	return (
		<label className={styles.label}>
			<input type="checkbox" className={styles.checkbox}/>
			<span className={styles.text}>{text}</span>
		</label	>
	)
}