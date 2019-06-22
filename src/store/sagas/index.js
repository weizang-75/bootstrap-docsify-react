
import { all, fork} from 'redux-saga/effects';
import docsify from './docsify';

export default function* rootSaga() {
    yield all([
        fork(docsify),
    ])
}
