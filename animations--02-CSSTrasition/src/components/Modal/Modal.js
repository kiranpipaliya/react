import React from 'react';
// import { Transition } from 'react-transition-group';
import CSSTransition from 'react-transition-group/CSSTransition';
import './Modal.css';
const modal = (props) => {
    const animationTiming = {
        enter: 400,
        exit: 1000
    }
    return <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.show}
        timeout={animationTiming}
        // Pasing class for animation 
        // classNames="fade-slide" // take class from css fade-slide-enter and fade-slide-enter-active || same ase exit
        // pasing object and class 
        classNames={{
            enter: "",
            enterActive: "ModalOpen",
            exit: "",
            exitActive: "ModalClose"
        }}
    >
        < div className="Modal">
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>Dismiss</button>
        </div>
    </CSSTransition>
};

export default modal; 