import { Footer } from '@/modules';
import { Container, Icon, Navigation } from '@/shared';
import { cn } from '@/utils';
import { useId, useState } from 'react';
import styles from './styles.module.css';

export const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const adaptiveMenuId = useId();

	const handleToggleMenu = () => {
		setMenuOpen(prev => !prev);
	};

	return (
		<header className={styles.header}>
			<Container className={styles.header__container}>
				<a
					className={styles.header__link}
					href='/'
					aria-label='Ссылка логотип ведущая на главную страницу'>
					<Icon name='logo' />
				</a>
				<Navigation className={styles.menu} />
				<button
					onClick={handleToggleMenu}
					aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
					aria-expanded={isMenuOpen}
					aria-controls={adaptiveMenuId}
					className={styles.btn}>
					<div
						className={cn(styles.burger, {
							[styles.active__burger]: isMenuOpen,
						})}>
						<span className={styles.burger__line} />
						<span className={styles.burger__line} />
						<span className={styles.burger__line} />
					</div>
				</button>
				<div
					className={cn(styles.menu__wrapper, {
						[styles.active]: isMenuOpen,
					})}>
					<Navigation
						id={adaptiveMenuId}
						className={cn(styles.menu, {
							[styles.adaptive__menu]: isMenuOpen,
						})}
					/>
					<Footer />
				</div>
			</Container>
		</header>
	);
};
