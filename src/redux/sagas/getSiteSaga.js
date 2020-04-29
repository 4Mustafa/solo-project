import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* siteSaga() {
    yield takeLatest('GET_SITE', addSite);
}

function* addSite(action) {
    try {
        yield axios.post('/topic', action.payload);
        yield put({ type: 'SET_SITE' });
    } catch (error) {
        console.log('post item to server failed', error);
    }
}


export default siteSaga;