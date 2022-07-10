import { useState } from "react";
import React from "react"
const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { },
})


export const AuthProvider = (props) => {
    const initialState = localStorage.getItem("token")
    const [token, setToken] = useState(initialState);

    const userLoggedIn = !!token;

    const timeduration = (time) => {
        const newtime = new Date().getTime();
        const adjustedTime = new Date(100).getTime();

        const remainingTime = adjustedTime - newtime;

        return remainingTime
    }


    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem("token")
    }
    const loginHandler = (token, time) => {
        setToken(token)
        localStorage.setItem("token", token)

        setTimeout(logoutHandler, timeduration(time))

    }

    const contextValue = {
        token: token,
        isLoggedIn: userLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
export default AuthContext;