import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* editSaga() {
    yield takeLatest('EDIT', getEdit);
}

function* editSaga() {
    try {
        const response = yield axios.put('/main', action.payload);
        yield put({ type: 'GET_ALLRESULTS' });
        console.log('IN EDIT SAGA', response.data);

    } catch (error) {
        console.log('post error to server failed', error);
    }
}


export default editSaga;