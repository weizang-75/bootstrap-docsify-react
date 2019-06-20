import packageJSON from "../package.json";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

console.log(`${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`);


ReactDOM.render(<App />, document.getElementById('docsify-react'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
