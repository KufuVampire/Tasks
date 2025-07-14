import { Container, Icon, Menu } from '@/shared';
import styles from './styles.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Container className={styles.header__container}>
				<a
					className={styles.header__link}
					href='/'
					aria-label='Ссылка логотип ведущая на главную страницу'>
					<Icon name='logo' />
				</a>
				<Menu />
			</Container>
		</header>
	);
};
