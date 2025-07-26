import { useEffect, useState } from 'react';
import { Footer, Header, Router } from './modules';
import { MainPage, VacancyFullPage } from './pages';
import { useVacancyStore } from './store';
import { getVacancyIdFromPath, navigate } from './utils';

const App = () => {
	const { vacancyId, setVacancyId } = useVacancyStore();
	const [routes, setRoutes] = useState([]);

	useEffect(() => {
		const handlePopState = () => {
			const id = getVacancyIdFromPath();
			setVacancyId(id);
		};

		window.addEventListener('popstate', handlePopState);

		return () => window.removeEventListener('popstate', handlePopState);
	}, []);

	useEffect(() => {
		const routes = [
			{
				path: `/`,
				element: <MainPage />,
			},
			{
				path: `/vacancy/${vacancyId}`,
				element: <VacancyFullPage />,
			},
		];
		setRoutes(routes);
	}, [vacancyId]);

	return (
		<>
			<Header />
			<Router routes={routes} />
			<Footer />
		</>
	);
};

export default App;
