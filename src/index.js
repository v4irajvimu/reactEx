import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var myDetails = {
  Age : '27',
  Gender: 'Male',
  School: 'SSCK'
};
ReactDOM.render(<App msg = "Viraj Vimukthi Jayasinghe." details = {myDetails}/>, document.getElementById('root'));
registerServiceWorker();
