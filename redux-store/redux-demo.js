const redux = require("redux");

/// State reducer Function ///
const reducer = (state = { counter: 0 }, action) => {
    if (action.type === "INCREMENT")
        return {
            counter: state.counter + 1

        }

    if (action.type === "DECREMENT")
        return {
            counter: state.counter - 1
        }
    return state;
}

/// Create Store ///
const store = redux.createStore(reducer);


/// Get State ///
const counterSubscribe = () => {
    const latestState = store.getState();
    console.log(latestState);
}

/// Subscribe to counterSubscribe function ///
store.subscribe(counterSubscribe)

/// Action Change ///
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });