
import { uiActions } from "./ui-slice"
import { cartActions } from "./cart-slice"

export const fetchingCartData = () => {
    return async (dispatch) => {
        const fetchRequest = async () => {

            const response = await fetch("https://redux-api-92ffa-default-rtdb.firebaseio.com/cart.json");

            if (!response.ok) {
                throw Error("Fetching Cart Data Failed")
            }
            const data = response.json()
            return data
        }
        try {
            const cartData = await fetchRequest();
            console.log(cartData);
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantities: cartData.totalQuantities
            }))
        } catch (error) {
            dispatch(uiActions.notification({
                title: "Error",
                status: "error",
                message: "Fetching Cart Data Failed"
            }))
        }
    }
}

export const sendingCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.notification({
            title: "Pending...",
            status: "pending",
            message: "Sending Cart Data.."
        }))

        const sendingReques = async () => {
            const response = await fetch("https://redux-api-92ffa-default-rtdb.firebaseio.com/cart.json", {
                method: "PUT",
                body: JSON.stringify({ items: cart.items, totalQuantities: cart.totalQuantities })
            })
            if (!response.ok) {
                throw Error("Sending data Failed");
            }
        }
        try {
            await sendingReques()

            dispatch(uiActions.notification({
                title: "Success",
                status: "Success",
                message: "Card Data Successfully Send"
            }))

        } catch (error) {
            dispatch(uiActions.notification({
                title: "Error",
                status: "error",
                message: "Sending Cart Data Failed"
            }))
        }

    }
}