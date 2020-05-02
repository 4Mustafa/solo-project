import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import topicSaga from './getTopicSaga'
import errorSaga from './getErrorSaga'
import siteSaga from './getSiteSaga'
import addItemSaga from './addItemSaga'
import allResultSaga from './getAllSaga'
import deleteSaga from './deleteSaga'
import wordSaga from './getWordSaga'
import word from '../reducers/wordReducer';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    topicSaga(),
    errorSaga(),
    siteSaga(),
    addItemSaga(),
    allResultSaga(),
    deleteSaga(),
    wordSaga(),
  ]);
}
