import axios from 'axios';

import { 
    // put, 
    takeEvery, 
    all 
} from 'redux-saga/effects';

// const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* docsifyCheckRestrictions(action) {
    let checkPath = '';
    const hashArr = action.hash.split(`/`);
    let parentDir = hashArr[hashArr.length - 1];
    if (parentDir === `` || parentDir[0] === `?` ){
        if (hashArr[hashArr.length - 2] !== `#`){
            parentDir = `/${hashArr[hashArr.length - 2]}`;
        }
    }else{
        parentDir = 'md';
    }
    checkPath += `/md${parentDir}/_restrictAccess.json`;
    yield console.log ('checkPath', checkPath);
    axios.get(checkPath)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    // yield put({ 
    //     type: 'SYSTEM/UPDATE/ROUTE',
    //     route: action.route,
    // });
    // yield history.push(action.route);
}

export function* watchDocsify() {
    yield takeEvery(`DOCSIFY/CHECK/RESTRICTIONS`, docsifyCheckRestrictions);  
}

export default function* docsifySaga() {
    yield all([
        watchDocsify(),
    ])
}