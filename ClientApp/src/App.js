import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';


const App = () => {
  return (
    <div>
      <Home />
    </div>

  );
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;