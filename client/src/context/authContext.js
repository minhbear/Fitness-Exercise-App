import { createContext, useReducer, useEffect } from 'react';

export const authContext = createContext();

const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                userName: action.payload.userName
            }
        case 'LOGOUT':
            return {
                userName: null
            }
        default:
            return state;
    }
}


export const AuthContextProvider = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, {
        userName: null,
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if(user){
            dispatch({ type: "LOGIN", payload: user });
        }
    }, [])

    return (
        <authContext.Provider value={{ ...user, dispatch }}>
            {children}
        </authContext.Provider>
    )
}