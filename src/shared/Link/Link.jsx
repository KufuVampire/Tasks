import { navigate } from '@/utils';

export const Link = ({ to, children, className }) => {
	const handleClick = e => {
		e.preventDefault();
		navigate(to);
	};
	return (
		<a
			className={className}
			href={to}
			onClick={handleClick}>
			{children}
		</a>
	);
};
