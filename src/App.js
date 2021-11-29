import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './components/Routing'
import Sidebar from './components/Sidebar/Sidebar'
import './components/Widgets/Widgets.scss'


function App() {
  return (

    <div className="App">
      <Router>
        <Sidebar />
        <Routing />
      </Router>
    </div>

  );
}

export default App;
