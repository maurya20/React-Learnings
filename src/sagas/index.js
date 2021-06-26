import { put, takeLatest, all } from "redux-saga/effects";
function* fetchDog() {
  const data = yield fetch("https://dog.ceo/api/breeds/image/random").then(
    (response) => response.json()
  );
  yield put({ type: "DOG_RECEIVED", dog: data.message });
}
function* actionWatcher() {
  yield takeLatest("GET_DOG", fetchDog);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
