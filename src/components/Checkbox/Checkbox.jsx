import { useState } from 'react'
import { Icon } from '@/components'
import styles from './styles.module.css'

export const Checkbox = ({ text }) => {
	const [isChecked, setChecked] = useState(false);

	return (
		<label className={styles.label}>
			<div className={styles.wrapper}>
				<input type="checkbox" className={styles.checkbox__input} checked={isChecked} onChange={() => setChecked(prev => !prev)} />
				<Icon name="checkmark" className={styles.checkbox} />
			</div>
			<span className={styles.text}>{text}</span>
		</label	>
	)
}