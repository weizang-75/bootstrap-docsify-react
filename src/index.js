
import packageJSON from "../package.json";
import React from 'react';
import ReactDOM from 'react-dom';
import { Docsify } from './neo-containers';
import * as serviceWorker from './serviceWorker';
console.log(`${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`);
// Docsify Config
window.$docsify = {
    name: 'Docsify React',
    repo: 'https://github.com/listingslab-software/docsify-react',
    auto2top   : true,
    maxLevel   : 3, 
    subMaxLevel: 3
}

ReactDOM.render(
    <React.Fragment>
        <Docsify />
    </React.Fragment>
, document.getElementById('docsify-react'));

serviceWorker.register();