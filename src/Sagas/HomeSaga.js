import { delay, takeEvery, takeLatest, put, call, select } from 'redux-saga/effects';
import { types } from '../Action/ActionTypes';

function *home(){
    console.log("hello")
    yield put({
        type: types.HOME,
        payload : true
    })
}


export function* watchHomeSaga() {
    yield takeLatest(types.HOME_SAGA, home);
}