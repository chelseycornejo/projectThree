// STYLING
import './sass/App.scss';

import { Fragment } from 'react';

// COMPONENTS
import Header from './Components/Header.js';
import Plant from './Components/Plant.js';

function App() {
  return (
    <Fragment>
      <Header />
      <Plant />
    </Fragment>
  );
}

export default App;
