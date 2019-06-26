import axios from 'axios';

import { 
    put, 
    takeEvery, 
    all,
    call
} from 'redux-saga/effects';
import { docsifyUpdateRestrictions } from '../actionCreators';

function loadRestrictions (path) {
    // console.log ('loadRestrictions', path)
    return axios.request({
        method: 'GET',
        url: path
    });
}

function* docsifyCheckRestrictions (action) {
    try {
        let path = '/';
        const hashArr = action.hash.split(`/`);
        for (let i=1; i<hashArr.length; i++){
            if (hashArr[i] !== `` ){
                path += `${hashArr[i]}/`;
            }
        }
        path += `_restrictAccess.json`;
        let { data } = yield call(loadRestrictions, path);
        // console.log (data, Date.now());
        yield put(docsifyUpdateRestrictions(data));
    } catch (e) {
        console.log ('[NO RESTRICTIONS] -> put action creator');
    }
}

export function* docsifyPageChange (action) {
    // https://medium.com/@shrsujan2007/implementation-of-redux-saga-in-react-applications-973f5a2a87d2
    try {
        yield console.log('what to do when a page changes?', action);
    }catch (e) {
        console.log ('[ERROR -> docsifyPageChange Saga]', e)
    }
}

export function* watchDocsify() {
    yield takeEvery(`DOCSIFY/CHECK/RESTRICTIONS`, docsifyCheckRestrictions); 
    yield takeEvery(`DOCSIFY/RESTRICTIOINS/UPDATE`, docsifyUpdateRestrictions); 
    yield takeEvery(`DOCSIFY/PAGE/CHANGE`, docsifyPageChange);  
}

export default function* docsifySaga() {
    yield all([
        watchDocsify(),
    ])
}