import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const navigate = useNavigate();

    const register = async(email, userName ,password) => {
        setIsLoading(true);
        setError(null);

        const respone = await fetch('/auth/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, userName ,password})
        });

        const json = await respone.json();
        
        if(!respone.ok) {
            setIsLoading(false);
            setError(json.error);
        }

        if(respone.ok){
            if(json.error){
                setIsLoading(false);
                setError(json);
            }else{
                //save the user to local storage
                localStorage.setItem('user', JSON.stringify(json))
                
                //update the authcontext
                dispatch({type: 'LOGIN', payload: json});
                setIsLoading(false);
                navigate('/')
            }
        }
    }

    return {register, isLoading, error, setError};
}