import { call, put } from "redux-saga/effects";
import { getUserApi } from "../../../api/instance";
import { setUsers } from "../../slice/users";

// Get user
export function* getUsersWorker() {
  try {
    //Call API to GET data
    const response = yield call(getUserApi);
    const data = yield response.data;
    // After having data, call redux and put it in users state
    yield put(setUsers(data));
  } catch (error) {
    throw error;
  }
}
