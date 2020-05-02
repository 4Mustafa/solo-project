import axios from 'axios';
import { put, takeLatest, actionChannel } from 'redux-saga/effects';


function* getEdit() {
    yield takeLatest('EDIT', editSaga);
}

function* editSaga(action) {
    try {
        console.log('payload is', action.payload);

        const response = yield axios.put('/main', action.payload);

        yield put({ type: 'GET_ALLRESULTS' });
        console.log('IN EDIT SAGA', response.data);

    } catch (error) {
        console.log('post error to server failed', error);
    }
}


export default getEdit;