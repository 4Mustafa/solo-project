import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
function* deleteSaga() {
    yield takeLatest('DELETE_ITEM', deleteItem);
}

function* deleteItem(action) {
    try {
        console.log('A.P IS', action.payload);

        yield axios.delete('/main', action.payload);


        yield put({ type: 'GET_ALLRESULTS' });
    } catch (error) {
        console.log('post item to server failed', error);
    }
}


export default deleteSaga;
