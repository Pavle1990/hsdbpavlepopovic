import { put, all, takeLatest } from 'redux-saga/effects';
import { BUTTON_CLICK } from '../actions/actions';
import { backlightOff, backlightOn, locking, cancel, error, submit, unlocking, runServiceMode, masterCodeCheck } from '../actions/actions';
import { api } from '../constants/api';
import { masterCode } from '../constants/masterCode';


const delay = (ms) => new Promise(res => setTimeout(res, ms))



function* buttonSaga(action) {
    const fullCode = action.code + action.payload;
    yield put(backlightOn())
    yield delay(1200)
    if (!action.is_service_mode) {

        if (fullCode.length > 6 && fullCode.indexOf('L') === -1) {
            yield put(error())
            yield delay(3800)
        } else if (!action.is_locked) {
            if (action.code.indexOf('L') === 6) {
                yield put(locking(action.code.substring(0, 6)))
                yield delay(3000)
                yield put(submit(true))
                yield delay(800)
            } else {
                yield delay(3800)
            }
        } else if (action.is_locked) {
            if (fullCode === '000000') {
                yield put(runServiceMode())
                yield delay(3800)
            } else if (fullCode === action.password) {
                yield put(unlocking(action.code.substring(0, 6)))
                yield delay(3000)
                yield put(submit(false))
                yield delay(800)
            } else {
                yield delay(3800)
            }
        }
    } else if (action.is_service_mode) {
        const response = yield fetch(api + fullCode)
            .then(response => response.json())
            .then(data => masterCodeCheck(data))
        yield put(masterCodeCheck())
        yield delay(3000)
        if (masterCode === response.payload?.sn) {
            yield put(submit(true))
            yield delay(800)
        }else{
            yield delay(800)
        }
    }
    yield put(backlightOff())
    yield put(cancel())
}

function* watchButton() {
    yield takeLatest(BUTTON_CLICK, buttonSaga)
}
export default function* rootSaga() {
    yield all([
        watchButton()
    ])
}