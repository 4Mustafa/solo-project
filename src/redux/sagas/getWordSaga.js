import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* wordSaga() {
    yield takeLatest('GET_WORD', getWords);
}

function* getWords(action) {
    try {
        let id = action.payload.newWord;

        const response = yield axios.get(`/word/${id}`);
        yield put({ type: 'SET_WORD', payload: response.data });
        console.log('IN GET WORD', response.data);

    } catch (error) {
        console.log('post error to server failed', error);
    }
}


export default wordSaga;