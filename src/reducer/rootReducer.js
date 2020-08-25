import {
    BACKLIGHT_OFF,
    BACKLIGHT_ON,
    SUBMIT,
    CANCEL,
    LOCKING,
    UNLOCKING,
    RUN_SERVICE_MODE,
    MASTER_CODE_CHECK,
    ERROR,
    BUTTON_CLICK
} from '../actions/actions'

const INITIAL_STATE = {
    initial_value: true,
    backlight_off: true,
    is_locked: false,
    is_service_mode:false,
    error: false,
    // submit: false,
    cancel: false,
    loading: false,
    validating: false,
    service_mode: false,
    locking: false,
    unlocking: false,
    code: '',
    password: null,
}

export const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BACKLIGHT_OFF:
            return {
                ...state,
                backlight_off: true
            }
        case BACKLIGHT_ON:
            return {
                ...state,
                backlight_off: false
            }
        case SUBMIT:
            return {
                ...state,
                is_locked: action.payload,

            }
        case CANCEL:
            return {
                ...state,
                cancel: true,
                code: '',
                unlocking: false,
                validating: false,
                error:false,
                locking:false,
                service_mode:false

            }
        case LOCKING:
            return {
                ...state,
                locking: true,
                password: action.payload,
                validating: false,
                error:false,
                unlocking:false,
                service_mode:false
            }
        case UNLOCKING:
            return {
                ...state,
                unlocking: true,
                validating: false,
                error:false,
                locking:false,
                service_mode:false

            }
        case RUN_SERVICE_MODE:
            return {
                ...state,
                service_mode: true,
                validating: false,
                error:false,
                locking:false,
                unlocking:false,
                is_service_mode:true,

            }
        case MASTER_CODE_CHECK:
            return {
                ...state,
                validating: true,
                error:false,
                locking:false,
                unlocking:false,
                service_mode:false

            }
        case ERROR:
            return {
                ...state,
                error: true,
                validating: false,
                locking:false,
                unlocking:false,
                service_mode:false

            }
        case BUTTON_CLICK:
            return {
                ...state,
                initial_value: false,
                code: state.code + action.payload,

            }
        default:
            return state
    }
}