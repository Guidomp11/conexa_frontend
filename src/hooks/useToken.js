import React, { useEffect, useState } from 'react';
import { authenticateOnAPI } from '../api';

export default function useToken(){
    const [userauthenticated, setUserAuthenticated] = useState(null);

    useEffect(() => {
        const unsuscribe = async () => {
            const token = localStorage.getItem('token');            
            if(token){
                const response = await authenticateOnAPI(token);

                if(response.response){
                    setUserAuthenticated({
                        user: response.response,
                        token: token
                    });
                }
                return;
            }

            return null;
        }
        return unsuscribe();
    }, [])

    return userauthenticated;
}