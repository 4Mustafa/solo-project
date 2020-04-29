import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* errorSaga() {
    yield takeLatest('GET_ERROR', addError);
}

function* addError(action) {
    try {
        yield axios.post('/topic', action.payload);
        yield put({ type: 'SET_ERROR' });
    } catch (error) {
        console.log('post item to server failed', error);
    }
}


export default errorSaga;
