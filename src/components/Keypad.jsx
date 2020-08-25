import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { buttonClick } from '../actions/actions'



let Keypad = (props) => {
    const { buttonClick, is_service_mode, code, is_locked, password } = props
    useEffect(() => {
        document.onkeydown = (e => {
            if (e.key === '7') buttonClick('7', is_service_mode, code, is_locked, password)
            else if (e.key === '8') buttonClick('8', is_service_mode, code, is_locked, password)
            else if (e.key === '9') buttonClick('9', is_service_mode, code, is_locked, password)
            else if (e.key === '4') buttonClick('4', is_service_mode, code, is_locked, password)
            else if (e.key === '5') buttonClick('5', is_service_mode, code, is_locked, password)
            else if (e.key === '6') buttonClick('6', is_service_mode, code, is_locked, password)
            else if (e.key === '1') buttonClick('1', is_service_mode, code, is_locked, password)
            else if (e.key === '2') buttonClick('2', is_service_mode, code, is_locked, password)
            else if (e.key === '3') buttonClick('3', is_service_mode, code, is_locked, password)
            else if (e.key === '0') buttonClick('0', is_service_mode, code, is_locked, password)
            else if (e.key === '*') buttonClick(is_service_mode ? '*' : '', is_service_mode, is_service_mode ? code : code + '*', is_locked, password)
            else if (e.key === 'L') buttonClick(is_service_mode ? 'L' : '', is_service_mode, is_service_mode ? code : code + 'L', is_locked, password)
        })
    })
    return (
        <div className='container'>
            <div className='keypad'>
                <button className='keypad__button' onClick={() => buttonClick('7', is_service_mode, code, is_locked, password)}>7</button>
                <button className='keypad__button' onClick={() => buttonClick('8', is_service_mode, code, is_locked, password)}>8</button>
                <button className='keypad__button' onClick={() => buttonClick('9', is_service_mode, code, is_locked, password)}>9</button>

                <button className='keypad__button' onClick={() => buttonClick('4', is_service_mode, code, is_locked, password)}>4</button>
                <button className='keypad__button' onClick={() => buttonClick('5', is_service_mode, code, is_locked, password)}>5</button>
                <button className='keypad__button' onClick={() => buttonClick('6', is_service_mode, code, is_locked, password)}>6</button>

                <button className='keypad__button' onClick={() => buttonClick('1', is_service_mode, code, is_locked, password)}>1</button>
                <button className='keypad__button' onClick={() => buttonClick('2', is_service_mode, code, is_locked, password)}>2</button>
                <button className='keypad__button' onClick={() => buttonClick('3', is_service_mode, code, is_locked, password)}>3</button>

                <button className='keypad__button' onClick={() => buttonClick(is_service_mode ? '*' : '', is_service_mode, is_service_mode ? code : code + '*', is_locked, password)}>*</button>
                <button className='keypad__button' onClick={() => buttonClick('0', is_service_mode, code, is_locked, password)}>0</button>
                <button className='keypad__button' onClick={() => buttonClick(is_service_mode ? 'L' : '', is_service_mode, is_service_mode ? code : code + 'L', is_locked, password)}>L</button>
            </div>
        </div>
    );
}
const mapDispatchToProps = {
    buttonClick
};
const mapStateToProps = (state) => ({
    is_service_mode: state.is_service_mode,
    code: state.code,
    is_locked: state.is_locked,
    password: state.password
});
Keypad = connect(mapStateToProps, mapDispatchToProps)(Keypad)
export default Keypad;