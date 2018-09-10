import { takeLatest, all } from 'redux-saga/effects'
import API from '../services/api'
import FixtureAPI from '../services/fixtureApi'
import DebugConfig from '../config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../redux/StartupRedux'
import { GithubTypes } from '../redux/GithubRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import getUserAvatar from './GithubSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),
  ])
}
