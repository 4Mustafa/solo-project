import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* allResultSaga() {
    yield takeLatest('GET_ALLRESULTS', getAll);
}

function* getAll() {
    try {
        const response = yield axios.get('/main');
        yield put({ type: 'GET_ITEM', payload: response.data });
        console.log('IN GETALL', response.data);

    } catch (error) {
        console.log('post error to server failed', error);
    }
}


export default allResultSaga;