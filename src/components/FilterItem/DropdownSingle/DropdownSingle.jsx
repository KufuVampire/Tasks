import { useRef, useState } from 'react';
import { Icon, Checkbox } from '@/components'
import { useClickOutside } from '@/hooks'

import styles from './styles.module.css'

export const DropdownSingle = ({ iconName, text, filters, className }) => {
	const [isOpen, setOpen] = useState(false);
	const dropdownRef = useRef(null);

	const liClasses = [styles.dropdown, isOpen ? styles.active : '', className].join(' ');

	useClickOutside(dropdownRef, setOpen);

	return (
		<li ref={dropdownRef} className={liClasses}>
			<button className={styles.btn} onClick={() => setOpen(prev => !prev)}>
				<div className={styles.wrapper}>
					<Icon name={iconName} className={styles.icon} />
					<p className={styles.text}>{text}</p>
				</div>
				{isOpen ?
					<Icon name='arrow-down' className={styles.icon} /> :
					<Icon name='arrow-right' className={styles.icon} />
				}
			</button>
			<ul className={`${styles.dropdown__list} ${isOpen ? styles.active__list : ''}`}>
				{
					filters.items.map((el, i) => (
						<li key={i} className={styles.dropdown__item}>
							<Checkbox text={el} />
						</li>
					))
				}
			</ul>
		</li>
	)
}
