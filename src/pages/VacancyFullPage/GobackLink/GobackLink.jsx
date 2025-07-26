import { Icon, Link } from '@/shared';
import styles from './styles.module.css';

export const GobackLink = () => {
	return (
		<Link
			to={'/'}
			className={styles.link__goback}>
			<Icon
				name='arrowRight'
				className={styles.arrow__left}
			/>
			<span className={styles.link__text}>К&nbsp;результатам поиска</span>
		</Link>
	);
};
