export const BACKLIGHT_OFF='BACKLIGHT_OFF';
export const BACKLIGHT_ON='BACKLIGHT_ON';
export const SUBMIT='SUBMIT';
export const CANCEL='CANCEL';
export const LOCKING='LOCKING';
export const UNLOCKING='UNLOCKING';
export const RUN_SERVICE_MODE='RUN_SERVICE_MODE';
export const MASTER_CODE_CHECK='MASTER_CODE_CHECK';
export const ERROR='ERROR';
export const BUTTON_CLICK='BUTTON_CLICK';

export const backlightOff=()=>({
    type:BACKLIGHT_OFF
})

export const backlightOn=()=>({
    type:BACKLIGHT_ON
})

export const submit =(data)=>({
    type:SUBMIT,
    payload:data
})

export const cancel =()=>({
    type:CANCEL
})

export const locking =(data)=>({
    type:LOCKING,
    payload:data
})

export const unlocking =()=>({
    type:UNLOCKING
})

export const runServiceMode=()=>({
    type:RUN_SERVICE_MODE
})

export const error=()=>({
    type:ERROR
})

export const masterCodeCheck=(data)=>({
    type:MASTER_CODE_CHECK,
    payload:data
})

export const buttonClick=(data,mode,code,is_locked,password)=>({
    type:BUTTON_CLICK,
    payload:data,
    is_service_mode:mode,
    code,
    is_locked,
    password
})