
import packageJSON from "../package.json";
import React from 'react';
import ReactDOM from 'react-dom';
import { Docsify } from './neo-containers';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './store/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';

console.log(`${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`);

const store = configureStore();
const getStore = () => { return store; };
export { getStore };
const persistor = persistStore(store);

// Set Colours
const colours = {
    colour1: `#abd4d8`, // light
    colour2: `#668894`, // mid
    colour3: `#203c51`, // dark
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
    <Provider store={store}>
        <PersistGate
            loading={null}
            persistor={persistor}>
            <Docsify />
        </PersistGate>
    </Provider>
, document.getElementById('docsify-react'));

serviceWorker.register();
