import React from 'react';
import Header from './components/shared/Header';
import { BrowserRouter as Router} from 'react-router-dom'
import Routings from './Routings';
const App = () => {

  

  return (
    <Router>
      <Header />
      <Routings />
    </Router>
  )
    
}

export default App;
