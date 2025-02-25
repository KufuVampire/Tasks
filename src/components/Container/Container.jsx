import styles from './styles.module.css'

export const Container = ({ children, className }) => {
	return (
		<div className={`${styles.container} ${className}`}>
			{children}
		</div>
	)
}