
import packageJSON from "../package.json";
import React from 'react';
import ReactDOM from 'react-dom';
import { Docsify } from './neo-containers';
import * as serviceWorker from './serviceWorker';
console.log(`${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`);

// Config
const colours = {
    colour1: `#abd4d8`,
    colour2: `#668894`,
    colour3: `#203c51`,
}

window.$docsify = {
    name: 'Docsify React',
    repo: 'https://github.com/listingslab-software/docsify-react',
    auto2top   : true,
    maxLevel   : 3, 
    subMaxLevel: 3,
    themeColor: colours.colour1,
    colours
}

ReactDOM.render(
    <React.Fragment>
        <Docsify />
    </React.Fragment>
, document.getElementById('docsify-react'));

serviceWorker.register();