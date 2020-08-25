import React from 'react';
import { connect } from 'react-redux';
import { backlightOff } from '../actions/actions';
import { errorStatus, lockingStatus, ready, serviceStatus, unlockingStatus, validatingStatus } from '../constants/mainSegmentValues';
import { locked, unlocked } from '../constants/topLeftSegmentValues'



let Screen = (props) => {
    const { backlight_off, code, is_locked,initial_value,error,validating,locking,unlocking,service_mode } = props

    const statuses=[error,validating,locking,unlocking,service_mode]
    let status=null;
    let index=statuses.indexOf(true)
    if(index===0)status=errorStatus
    else if(index===1)status=validatingStatus
    else if(index===2)status=lockingStatus
    else if(index===3)status=unlockingStatus
    else if(index===4)status=serviceStatus

    return (
        <div className={`screen ${(!backlight_off) ? 'active' : ''}`}>
            <div className='screen__upperText'>{is_locked ? locked : unlocked}</div>
            <div className='screen__lowerText'>{initial_value?ready:status?status:code}</div>
        </div>
    );
}
const mapDispatchToProps = {
    backlightOff
};

const mapStateToProps = (state) => ({
    backlight_off: state.backlight_off,
    code: state.code,
    is_locked: state.is_locked,
    initial_value:state.initial_value,
    error:state.error,
    validating: state.validating,
    locking:state.locking,
    unlocking:state.unlocking,
    service_mode:state.service_mode

});
Screen = connect(mapStateToProps, mapDispatchToProps)(Screen)
export default Screen;