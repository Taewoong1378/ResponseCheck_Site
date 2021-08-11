import { fork, put, takeLatest, call, all } from 'redux-saga/effects';
import axios from 'axios';

import {
    NICKNAME_REQUEST,
    NICKNAME_SUCCESS,
    NICKNAME_FAILURE,
} from '../reducers/user';

function nicknameAPI(data) {
    return axios.post('/user', data);
}
// data: nickname & score

function* nicknameIn(action) {
    try {
      const result = yield call(nicknameAPI, action.data);
      yield put({
        type: NICKNAME_SUCCESS,
        data: result.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: NICKNAME_FAILURE,
        error: err.response.data,
      });
    }
}

function* watchNicknameIn() {
    yield takeLatest(NICKNAME_REQUEST, nicknameIn);
}

export default function* userSaga() {
    yield all([
      fork(watchNicknameIn),
    ]);
}
  