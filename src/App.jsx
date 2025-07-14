import { MainPage, VacancyFullPage } from './pages';
import { Footer, Header } from './shared';
import { useVacancyStore } from './store';

const App = () => {
	const { isOpen } = useVacancyStore();
	return (
		<>
			<Header />
			<MainPage isOpen={isOpen} />
			{isOpen && <VacancyFullPage />}
			<Footer />
		</>
	);
};

export default App;
