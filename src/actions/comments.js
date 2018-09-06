import { takeEvery, put } from 'redux-saga/effects';
import { actionTypes } from '../common/constants/actionTypes';
import { update } from '../common/helpers/indexedDB';

function* addCommentRequest(action) {
  try {
    yield update(action.payload);
    yield put({ type: actionTypes.EDIT_POST, payload: action.payload });
    yield put({ type: actionTypes.ADD_COMMENT_SUCCESS });
  } catch (error) {
    yield put({ type: actionTypes.ADD_COMMENT_FAILURE });
  }
}

export function* watchAddCommentRequest() {
  yield takeEvery(actionTypes.ADD_COMMENT_REQUEST, addCommentRequest);
}
