import styles from './styles.module.css';

export const NavigationItem = ({ text, href }) => {
	return (
		<li className={styles.item}>
			<a href={href}>{text}</a>
		</li>
	);
};
