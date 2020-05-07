import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* GetMineSaga() {
    yield takeLatest('GET_MYRESULTS', getMine);
}

function* getMine(action) {
    try {
        let id = action.payload;
        console.log('in get mine saga', id);

        const response = yield axios.get(`/mine/${id}`);
        yield put({ type: 'GET_MINE', payload: response.data });
        console.log('IN GET MINE SAGA', response.data);

    } catch (error) {
        console.log('post error to server failed', error);
    }
}


export default GetMineSaga; 