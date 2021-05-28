import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './config/routes';

/**
 * Component App
 * @return {App} component app
 */
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes />
    </div>
  );
}

export default App;
