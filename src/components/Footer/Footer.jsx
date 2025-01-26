import styles from './styles.module.css'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`container ${styles.footer__container}`}>
				<p className={styles.footer__text}>
					Проект выполнен в рамках стажировки <a className={styles.footer__link} href="https://preax.ru/">PREAX</a>
				</p>
			</div>
		</footer>
	)
}
