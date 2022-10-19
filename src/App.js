import React from 'react';
import Header from './components/shared/Header';
import { BrowserRouter as Router} from 'react-router-dom'
import Routings from './Routings';
import Provider from './store/Provider';
import {initStore} from './store';


const store = initStore();
const App = () => {

  

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routings />
      </Router>
    </Provider>
  )
    
}

export default App;
