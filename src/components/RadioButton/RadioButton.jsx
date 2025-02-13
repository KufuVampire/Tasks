import styles from './styles.module.css'

export const RadioButton = ({ text, name }) => {

	return (
		<label className={styles.label}>
			<input type="radio" className={styles.radio} name={name} />
			<span className={styles.text}>{text}</span>
		</label>
	)
}