import { useEffect } from 'react';
import { Footer, Header, Main } from './components';

const App = () => {

  useEffect(() => {
    document.title = "Career App";
  }, [])

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
