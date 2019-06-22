
// import history from '../history';
import { 
    // put, 
    takeEvery, 
    all 
} from 'redux-saga/effects';

// const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* docsifyDoit(action) {
    // yield console.log ('systemOpenNewIssue', action);
    // yield put({ 
    //     type: 'SYSTEM/UPDATE/ROUTE',
    //     route: action.route,
    // });
    // yield history.push(action.route);
}

export function* watchDocsify() {
    yield takeEvery('DOCSIFY/DOIT', docsifyDoit);  
}

export default function* docsifySaga() {
    yield all([
        watchDocsify(),
    ])
}