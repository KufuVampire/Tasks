import { useEffect, useState } from 'react';

export const Router = ({ routes }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);
	useEffect(() => {
		const handleLocationChange = () => setCurrentPath(window.location.pathname);

		window.addEventListener('popstate', handleLocationChange);
		return () => window.removeEventListener('popstate', handleLocationChange);
	}, []);

	const route = routes.find(r => r.path === currentPath);

	return route ? <>{route.element}</> : <div>404 - Not Found</div>;
};
