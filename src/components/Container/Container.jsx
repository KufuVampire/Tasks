import styles from './styles.module.css'

export const Container = ({ children, className, style }) => {
	return (
		<div className={`${styles.container} ${className}`} style={style}>
			{children}
		</div>
	)
}