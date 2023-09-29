import React from 'react'
import './Modal.css'

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
            <div className="footer">
                <button onClick={() => closeModal(false)}>Cancel</button>
                <button> Continue </button>
            </div>
        </div>

    </div>
  )
}

export default Modal