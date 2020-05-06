import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addFavSaga() {
    yield takeLatest('ADD_FAV', addFav);
    yield takeLatest('FAV', getFav);
    yield takeLatest('DELETE_FAV', deleteFav);
}

function* addFav(action) {
    try {
        console.log('in favv saga', action.payload);
        yield axios.post('/fav', { data: action.payload });
    } catch (error) {
        console.log('post item to server failed', error);
    }
}
function* getFav(action) {
    try {
        let id = action.payload
        console.log('in getfav saga', id);
        const response = yield axios.get(`/fav/${id}`);
        yield put({ type: 'GET_FAV', payload: response.data });
        console.log('IN get fav', response.data);

    } catch (error) {
        console.log('post error to server failed', error);
    }
}

function* deleteFav(action) {
    try {
        let id = action.payload

        console.log('datate fav id IS', id);

        yield axios.delete(`/fav/${id}`);

        yield put({ type: 'FAV' });
    } catch (error) {
        console.log('post item to server failed', error);
    }
}




export default addFavSaga;
