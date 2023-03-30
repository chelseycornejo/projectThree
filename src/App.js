// STYLING
import './sass/App.scss';

import { Fragment } from 'react';

// COMPONENTS
import Header from './Components/Header.js';
import Plant from './Components/Plant.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <Fragment>
      <Header />
      <Plant />
      <Footer />
    </Fragment>
  );
}

export default App;
