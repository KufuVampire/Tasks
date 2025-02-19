import { useRef, useState } from "react"
import { Icon, Checkbox, RadioButton } from '@/components'

import styles from './styles.module.css';

export const Dropdown = ({ iconName, text, filters }) => {
	const [isOpen, setOpen] = useState(false);
	const dropdownRef = useRef(null);

	const { type, items } = filters;

	return (
		<li ref={dropdownRef} className={`${styles.item} ${isOpen ? styles.active : ''}`}>
			<button className={styles.btn} onClick={() => setOpen(prev => !prev)}>
				<div className={styles.wrapper}>
					<Icon name={iconName} />
					<p className={styles.text}>{text}</p>
				</div>
				<Icon name='arrow-right' className={styles.icon} />
			</button>
			<ul className={`${styles.dropdown__list} ${isOpen ? styles.active__list : ''}`}>
				{
					items.map((el, i) => (
						<li key={i} className={styles.dropdown__item}>
							{
								type === 'checkbox' || (i === items.length - 1 && type === 'mix') ? <Checkbox text={el} /> : <RadioButton text={el} name={text} />
							}
						</li>
					))
				}
			</ul>
		</li>
	)
}