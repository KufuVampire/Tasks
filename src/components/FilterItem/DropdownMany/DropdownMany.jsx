import { Icon } from '@/components';
import { useClickOutside } from '@/hooks';
import { cn } from '@/utils';
import { useRef, useState } from 'react';

import { Dropdown } from './Dropdown/Dropdown';
import styles from './styles.module.css';

export const DropdownMany = ({ iconName, text, filters, className }) => {
	const [isOpen, setOpen] = useState(false);
	const dropdownRef = useRef(null);

	useClickOutside(dropdownRef, setOpen);

	return (
		<li
			ref={dropdownRef}
			className={cn([styles.dropdown, className], {
				[styles.active]: isOpen,
			})}>
			<button
				className={styles.btn}
				onClick={() => setOpen((prev) => !prev)}>
				<div className={styles.wrapper}>
					<Icon name={iconName} />
					<p className={styles.text}>{text}</p>
				</div>
				<Icon
					name="arrow-right"
					className={cn([styles.icon, styles.arrow__icon])}
				/>
			</button>
			<ul
				className={cn([styles.dropdown__list], {
					[styles.active__list]: isOpen,
				})}>
				{filters.map(({ iconName, text, type, items }, i) => (
					<Dropdown
						key={i}
						iconName={iconName}
						text={text}
						filters={{ type, items }}
					/>
				))}
			</ul>
		</li>
	);
};
