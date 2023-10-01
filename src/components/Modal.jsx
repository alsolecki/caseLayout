import React from 'react'
import './Modal.css'
import img from '../assets/AS_UA-logo.jpg'

const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
        <div className="titleCloseBtn">
            <button onClick={() => closeModal(false)}>X</button>
        </div>
            <div className="title">
                <h1>What size is your case?</h1>
            </div>
            <div className="body"></div>
                <p>Start with the case height.</p>
                <img id="img1" src={ img } />
                <label for="casewidth">Width of Case Interior:</label>
                <input id="width" type="text" maxlength="4"></input>
            <div className="footer">
                <button onClick={() => closeModal(false)}>Cancel</button>
                <button> Continue </button>
            </div>
        </div>

    </div>
  )
}

export default Modal