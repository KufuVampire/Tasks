import { Container, Icon, Menu, Footer } from '@/shared';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { cn } from '@/utils';

export const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.removeProperty('overflow');
		}
	}, [isMenuOpen]);

	const handleToggleMenu = () => {
		if (isMenuOpen) {
			setMenuOpen(false);
			return;
		}

		setMenuOpen(true);
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
				<Menu className={styles.menu} />
				<button
					onClick={handleToggleMenu}
					className={styles.btn}>
					{isMenuOpen ? (
						<Icon
							name='cross'
							className=''
							style={{ fill: 'black', width: '24px', height: '24px' }}
						/>
					) : (
						<Icon name='burger' />
					)}
				</button>
				<div
					className={cn([styles.menu__wrapper], {
						[styles.active]: isMenuOpen,
					})}>
					<Menu
						className={cn([styles.menu], {
							[styles.adaptive__menu]: isMenuOpen,
						})}
					/>
					<Footer />
				</div>
			</Container>
		</header>
	);
};
