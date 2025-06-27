import { MenuItem } from './MenuItem/MenuItem';
import styles from './styles.module.css';

const menuItems = [
	{
		text: 'Поиск вакансий',
		href: '/',
	},
	{
		text: 'Избранные вакансии',
		href: '/',
	},
];

export const Menu = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				{menuItems.map((item, i) => (
					<MenuItem
						key={i}
						href={item.href}
						text={item.text}
					/>
				))}
			</ul>
		</nav>
	);
};
