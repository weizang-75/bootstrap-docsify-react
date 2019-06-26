import axios from 'axios';

import { 
    put, 
    takeEvery, 
    all 
} from 'redux-saga/effects';

export function* docsifyCheckRestrictions(action) {

    // https://medium.com/@shrsujan2007/implementation-of-redux-saga-in-react-applications-973f5a2a87d2
    
    let checkPath = '/';
    const hashArr = action.hash.split(`/`);
    for (let i=1; i<hashArr.length; i++){
        if (hashArr[i] !== `` ){
            checkPath += `${hashArr[i]}/`;
        }
    }
    checkPath += `_restrictAccess.json`;
    axios.get(checkPath)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            const { status } = error.response; 
            if (status === 404){
                console.log('NO RESTRICTION');
            }
        })
        .finally(function () {
            // always executed
        });
}

export function* watchDocsify() {
    yield takeEvery(`DOCSIFY/CHECK/RESTRICTIONS`, docsifyCheckRestrictions);  
}

export default function* docsifySaga() {
    yield all([
        watchDocsify(),
    ])
}