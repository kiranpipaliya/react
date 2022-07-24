import React from 'react';
import { Transition } from 'react-transition-group';
import './Modal.css';

const modal = (props) => {
    const animationTiming = {
        enter: 400,
        exit: 1000
    }
    return <Transition
        mountOnEnter
        unmountOnExit
        in={props.show} timeout={animationTiming} >
        {state => {
            const cssClasse = ["Modal", state === "entering" ? "ModalOpen" : state === "exiting" ? "ModalClose" : null]

            return < div className={cssClasse.join(" ")} >
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        }
        }
    </Transition>
};

export default modal; 