import { Container } from '@/components'

import styles from './styles.module.css'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container className={styles.footer__container}>
				<p className={styles.footer__text}>
					Проект выполнен в рамках стажировки <a href='https://preax.ru' target='_blank' className={styles.footer__link}>PREAX</a>
				</p>
			</Container>
		</footer>
	)
}
