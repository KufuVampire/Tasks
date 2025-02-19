import { useRef, useState } from 'react'
import { Icon } from '@/components'
import { useClickOutside } from '@/hooks'

import styles from './styles.module.css'

export const Input = ({ iconName, text, value, setValue }) => {
	const [isActive, setActive] = useState(false);
	const inputRef = useRef(null);

	useClickOutside(inputRef, setActive)

	return (
		<li className={`${styles.item} ${isActive || value.trim() ? styles.active : ''}`} ref={inputRef} onClick={() => setActive(true)}>
			<div className={styles.wrapper}>
				<Icon name={iconName} className={styles.icon} />
				<input className={styles.input} type="text" placeholder={text} value={value} onChange={(e) => setValue(e.target.value)} />
			</div>
			{value && <Icon name='cross' className={`${styles.icon} ${styles.cross__icon}`} onClick={() => setValue('')} />}
		</li>
	)
}