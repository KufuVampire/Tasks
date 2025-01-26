import styles from './styles.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={`container ${styles.header__container}`}>
				<a className={styles.header__link} href="https://preax.ru/" target='_blank'>
					<img src="./logo.svg" alt="logo" />
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
			</div>
		</header>
	)
}
