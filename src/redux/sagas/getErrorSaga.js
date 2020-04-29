import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* errorSaga() {
    yield takeLatest('GET_ERROR', addError);
}

function* addError(action) {
    try {
        const response = yield axios.post('/error', action.payload);
        yield put({ type: 'SET_ERROR', payload: response.data });
        console.log(response.data);

    } catch (error) {
        console.log('post error to server failed', error);
    }
}


export default errorSaga;