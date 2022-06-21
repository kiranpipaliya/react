import { useRef, useState } from 'react';
import './Checkout.css';

const inputValidity = (value) => value.trim() === "";
const postalCodeValidity = (value) => value.trim().length == 5;
const Checkout = (props) => {
    const [formInputIsValid, setFormInputIsValid] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true,
    }
    )

    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();


    const confirmHandler = (event) => {
        event.preventDefault();

        const nameValue = nameRef.current.value;
        const streetValue = streetRef.current.value;
        const postalValue = postalRef.current.value;
        const cityValue = cityRef.current.value;

        const nameValid = !inputValidity(nameValue);
        const streetValid = !inputValidity(streetValue);
        const cityValid = !inputValidity(cityValue);
        const postalValid = postalCodeValidity(postalValue);

        setFormInputIsValid({
            name: nameValid,
            street: streetValid,
            postalCode: postalValid,
            city: cityValid,
        })
        props.onConform({
            name: nameValue,
            street: streetValue,
            postalCode: postalValue,
            city: cityValue,

        })
    };

    const nameinvalidClass = !formInputIsValid.name ? 'invalid' : '';
    const streetinvalidClass = !formInputIsValid.street ? 'invalid' : '';
    const postalinvalidClass = !formInputIsValid.postalCode ? 'invalid' : '';
    const cityinvalidClass = !formInputIsValid.city ? 'invalid' : '';


    return (
        <form className="form" onSubmit={confirmHandler}>
            <div className={`control ${nameinvalidClass}`} >
                <label htmlFor='name'>Your Name</label>
                <input ref={nameRef} type='text' id='name' />
                {!formInputIsValid.name && <p>Please enter a valid name</p>}
            </div>
            <div className={`control ${streetinvalidClass}`}>
                <label htmlFor='street'>Street</label>
                <input ref={streetRef} type='text' id='street' />
                {!formInputIsValid.street && <p>Please enter a valid street</p>}
            </div>
            <div className={`control ${postalinvalidClass}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input ref={postalRef} type='text' id='postal' />
                {!formInputIsValid.postalCode && <p>Please enter a valid postal code</p>}
            </div>
            <div className={`control ${cityinvalidClass}`}>
                <label htmlFor='city'>City</label>
                <input ref={cityRef} type='text' id='city' />
                {!formInputIsValid.city && <p>Please enter a valid city</p>}
            </div>
            <div className="actions">
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className="submit">Confirm</button>
            </div>
        </form >
    );
};

export default Checkout;