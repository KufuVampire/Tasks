import styles from './styles.module.css';
import { cn } from '@/utils';

export const Main = ({ children, className }) => {
	return <main className={cn([styles.main, className])}>{children}</main>;
};
