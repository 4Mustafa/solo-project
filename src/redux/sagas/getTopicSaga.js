import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* topicSaga() {
    yield takeLatest('GET_TOPIC', addTopic);
}

function* addTopic(action) {
    try {
        yield axios.post('/topic', action.payload);
        yield put({ type: 'SET_TOPIC' });
    } catch (error) {
        console.log('post item to server failed', error);
    }
}


export default topicSaga;
