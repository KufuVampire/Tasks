import { Icon } from '@/components'
import styles from './styles.module.css'

export const FilterItem = ({ iconName, text, isInput }) => {

	if (isInput) {
		return (
			<li className={styles.item}>
				<form className={styles.form}>
					<div className={styles.wrapper}>
						<Icon name={iconName} className={styles.icon} />
						<input className={styles.input} type="text" placeholder={text} />
					</div>
				</form>
			</li>
		)
	}

	return (
		<li className={styles.item}>
			<form className={styles.form}>
				<div className={styles.wrapper}>
					<Icon name={iconName} className={styles.icon} />
					<p className={styles.text}>{text}</p>
				</div>
				<Icon name='arrow-right' className={styles.icon} />
			</form>
		</li>
	)
}
