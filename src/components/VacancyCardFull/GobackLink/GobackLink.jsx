import { Icon } from '@/components'
import styles from './styles.module.css'

export const GobackLink = ({ setOpen }) => {
	return (
		<button onClick={() => setOpen(false)} className={styles.link__goback}>
			<Icon name="arrow-right" className={styles.arrow__left} />
			<span className={styles.link__text}>
				К результатам поиска
			</span>
		</button>
	)
}
