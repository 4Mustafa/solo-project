import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* topicSaga() {
    yield takeLatest('GET_TOPIC', addTopic);
}

function* addTopic(action) {
    try {
        const response = yield axios.post('/topic', action.payload);
        yield put({ type: 'SET_TOPIC', payload: response.data });
        console.log(response.data);

    } catch (error) {
        console.log('post topic to server failed', error);
    }
}


export default topicSaga;
