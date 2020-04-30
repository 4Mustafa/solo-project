import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addItemSaga() {
    yield takeLatest('ADD_ITEM', addItem);
}

function* addItem(action) {
    try {
        yield axios.post('/main', action.payload);
        yield put({ type: 'GET_ITEM' });
    } catch (error) {
        console.log('post item to server failed', error);
    }
}



export default addItemSaga;
