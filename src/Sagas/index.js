import { all, fork } from 'redux-saga/effects';
import { watchHomeSaga } from './HomeSaga'

// Redux Saga: Root Saga
export function *rootSaga() {
    yield all([
       fork(watchHomeSaga),
    ]);
};