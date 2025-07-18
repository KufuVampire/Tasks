import { Icon } from '@/shared';
import styles from './styles.module.css';

export const GobackLink = ({ setOpen }) => {
	return (
		<button
			onClick={() => setOpen(false)}
			className={styles.link__goback}>
			<Icon
				name='arrowRight'
				className={styles.arrow__left}
			/>
			<span className={styles.link__text}>К&nbsp;результатам поиска</span>
		</button>
	);
};
