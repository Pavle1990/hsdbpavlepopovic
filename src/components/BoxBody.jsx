import React from 'react';
import Screen from './Screen';
import Keypad from './Keypad';

function BoxBody(props) {
    return (
        <div className='boxbody'>
            <Screen/>
            <Keypad/>
            <div className='boxbody__code'>S/N: 4815162342</div>
        </div>
    );
}

export default BoxBody;