import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const navigate = useNavigate();

    const login = async(email, password) => {
        setIsLoading(true);
        setError(null);

        const respone = await fetch('/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const json = await respone.json();

        if(!respone.ok){
            setIsLoading(false);
            setError(json.error);
        }

        if(respone.ok){
            if(json.error){
                setIsLoading(false);
                setError(json);
            }else{
                //save the user to local storage
                localStorage.setItem('user', JSON.stringify(json));
                console.log(json);
                
                //update the authcontext
                dispatch({ type: 'LOGIN',  payload: json });
                setIsLoading(false);
                navigate('/')
            }
        }
    }

    return { login, isLoading, error, setError };;
}