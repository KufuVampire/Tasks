import { Icon, Container } from '@/components'
import styles from './styles.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Container className={styles.header__container}>
				<a className={styles.header__link} href="/" aria-label='Ссылка логотип ведущая на главную страницу'>
					<Icon name='logo' />
				</a>
				<nav className={styles.header__nav}>
					<ul className={styles.header__list}>
						<li className={styles.header__item}>
							<a href="/">
								Поиск вакансий
							</a>
						</li>
						<li className={styles.header__item}>
							<a href="/">
								Избранные вакансии
							</a>
						</li>
					</ul>
				</nav>
			</Container>
		</header>
	)
}
