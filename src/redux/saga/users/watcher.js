import { takeLatest } from "redux-saga/effects";
import { getUsers } from "../../slice/users";
import { getUsersWorker } from "./worker";

export default function* usersWatcher() {
  yield takeLatest(getUsers.type, getUsersWorker);
}
