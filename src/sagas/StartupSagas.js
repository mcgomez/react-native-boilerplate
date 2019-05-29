import { put, select } from 'redux-saga/effects'
import GithubActions, { GithubSelectors } from '../redux/GithubRedux'
import { is } from 'ramda'

// exported to make available for tests
export const selectAvatar = GithubSelectors.selectAvatar

// process STARTUP actions
export function* startup(action) {
  const avatar = yield select(selectAvatar)
  // only get if we don't have it yet
  if (!is(String, avatar)) {
    yield put(GithubActions.userRequest('GantMan'))
  }
}
