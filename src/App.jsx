import { useState } from 'react'
import './App.css'
import Modal from './components/Modal.jsx'

function App() {

  const [openModal, setOpenModal] = useState(false);

  let buttonStyle = { border: "2px solid yellow", 
                      borderRadius: "10px",
                      fontSize: "1.5rem",
                      width: "100px",
                      height: "80px",
                      color: "black"
                    };

  return (
    <>
      <header>
        <h1 style={{color: "yellow"}}>
          Click to Start a New Case Layout
        </h1>
        <button
          className="openModalBtn"
          style={ buttonStyle }
          onClick={() => {
            setOpenModal(true);
          }}> Begin
        </button>
      </header>
      {openModal && <Modal closeModal={setOpenModal}  />}
    </>
  )
}


export default App
