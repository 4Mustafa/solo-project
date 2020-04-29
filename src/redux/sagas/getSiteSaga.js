import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* siteSaga() {
    yield takeLatest('GET_SITE', addSite);
}

function* addSite(action) {
    try {
        const response = yield axios.post('/site', action.payload);
        yield put({ type: 'SET_SITE', payload: response.data });
        console.log(response.data);

    } catch (error) {
        console.log('post site to server failed', error);
    }
}


export default siteSaga;