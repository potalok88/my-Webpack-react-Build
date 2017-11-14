import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchSuccess, fetchFailure, fetch } from './';


const request = () => axios.get('https://www.cbr-xml-daily.ru/daily_json.js');

export function* getRateCurrency() {
  try {
    const response = yield call(request);
    yield put(fetchSuccess(response));
  } catch (err) {
    yield put(fetchFailure(err));
  }
}


/**
 * Root saga manages watcher lifecycle
 */
export default function* () {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(`${fetch}`, getRateCurrency);
}
