import ReactDOM from 'react-dom';
import React from 'react'
import App from './App.js'
import './index.css';

//const h2Element = React.createElement('h2', null, 'What a nice day')
// const element = React.createElement('h1', {className: 'title'}, 'Hello World', h2Element);
const rootElement = document.getElementById('root');



ReactDOM.render(<App />, rootElement);