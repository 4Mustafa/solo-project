import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* ratingSaga() {
    yield takeLatest('ADD_RATING', addRating);
    yield takeLatest('MINUS_RATING', minusRating);

}

function* addRating(action) {
    try {
        console.log('IN ADD RATING', action.payload);
        const response = yield axios.post('/addRating', { data: action.payload });
        yield put({ type: 'GET_ALLRESULTS' });

    } catch (error) {
        console.log('add rating to server failed', error);
    }
}

function* minusRating(action) {
    try {
        console.log('IN ADD RATING', action.payload);
        const response = yield axios.post('/minusRating', { data: action.payload });
        yield put({ type: 'GET_ALLRESULTS' });

    } catch (error) {
        console.log('add rating to server failed', error);
    }
}
export default ratingSaga;