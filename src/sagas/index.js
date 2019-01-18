import { fork, all } from 'redux-saga/effects'

import DatInfo from './data-info-saga'

export default function* sagas() {
    yield all([
        fork(DatInfo)
    ])
}