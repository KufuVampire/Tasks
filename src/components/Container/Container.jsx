import { cn } from '@/utils'
import styles from './styles.module.css'

export const Container = ({ children, className, props }) => {
	return (
		<div className={cn([styles.container, className])} {...props}>
			{children}
		</div>
	)
}