import React from 'react'
import './Popup.css';
import Otpinput from './Otpinput.jsx';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <h1>Phone Verification</h1>
                <hr></hr>
                <span className="close-btn" onClick={() => props.setTrigger(false)}>&times;</span>
                <Otpinput/>
            </div>
        </div>
    ) : ""
}

export default Popup
