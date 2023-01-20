import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';

import Home from './pages/Home';


const App = () => {
  return (
    <div>
      <AppRoutes />
    </div>

  );
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;