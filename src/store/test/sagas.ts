import { TV_list_on_the_air } from 'src/api/models';
import { getTest } from 'src/api/requests';
import { call, put, takeLatest } from "redux-saga/effects";
import * as A from './actions';

function* getDataWatcher(){
  yield takeLatest<A.LoadDataAction>(A.LoadDataActionType.LOAD_DATA, getDataRequest)
}
function* getDataRequest() {
  try {
    const { data }: { data: TV_list_on_the_air} = yield call(getTest)
    yield put(A.loadDataSuccess(data));
  } catch (error) {
    yield put(A.loadDataFailure(error));
  }
  
}

const sagas = [call(getDataWatcher)];

export default sagas;