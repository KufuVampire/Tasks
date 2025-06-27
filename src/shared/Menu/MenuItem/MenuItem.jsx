import styles from './styles.module.css';

export const MenuItem = ({ text, href }) => {
	return (
		<li className={styles.item}>
			<a href={href}>{text}</a>
		</li>
	);
};
