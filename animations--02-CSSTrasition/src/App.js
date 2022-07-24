import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [showBlock, setShowBlock] = useState(false)
  const showModal = () => {
    setModalIsVisible(true)
  }
  const hideModal = () => {
    setModalIsVisible(false)
  }
  const toggle = () => {
    setShowBlock(!showBlock)
  }
  return <div className="App">
    <h1>React Animations</h1>
    <button className="Button" onClick={toggle}>Toggle Block</button><br />
    <Transition
      in={showBlock}
      timeout={1000}
      mountOnEnter
      unmountOnExit
      onEnter={() => console.log("Enter")}
      onEntering={() => console.log("Entering")}
      onEntered={() => console.log("Entered")}
      onExit={() => console.log("Exit")}
      onExiting={() => console.log("Exiting")}
      onExited={() => console.log("Exited")}
    >
      {state => (
        <div style={{
          backgroundColor: "red",
          width: 100, height: 100,
          margin: "auto", transition: " opacity 1s ease-out",
          opacity: state === "exiting" ? 0 : 1
        }}>
          <p style={{ color: "#FFF", fontSize: "20px" }}>{state}</p>
        </div>
      )}

    </Transition>

    <Modal show={modalIsVisible} closed={hideModal} />


    {modalIsVisible ? <Backdrop show={modalIsVisible} /> : null}
    <button onClick={showModal} className="Button">Open Modal</button>
    <h3>Animating Lists</h3>
    <List />
  </div>



}

export default App;
