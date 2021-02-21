import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

var cowsay = require("cowsay-browser");

console.log(cowsay.say({
	text : "Black https://github.com/amireshoon/black",
	e : "^^",
	T : "U "
}));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
