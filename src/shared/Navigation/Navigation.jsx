import { NavigationItem } from './NavigationItem/NavigationItem';
import styles from './styles.module.css';

const menuItems = [
	{
		text: 'Поиск вакансий',
		href: '/',
	},
	{
		text: 'Избранные вакансии',
		href: '/favorites',
	},
];

export const Navigation = ({ id = '', className }) => {
	return (
		<nav
			aria-label='Основное меню'
			className={className}>
			<ul id={id} className={styles.list}>
				{menuItems.map(item => (
					<NavigationItem
						key={item.href}
						href={item.href}
						text={item.text}
					/>
				))}
			</ul>
		</nav>
	);
};
