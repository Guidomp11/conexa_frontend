import { api, authConfig } from "./config";

export const makeRequest = async (endpoint) => {
    try{
        authConfig.headers['x-auth-token'] = localStorage.getItem('token') || '';
        
        const response = await (await fetch(api + endpoint, {
            ...authConfig, 
            method: 'GET'
        })).json();

        return response;
    }catch(e){
        return e;
    }
}

export const sendDataToAPI = async (endpoint, body) => {
    try{
        authConfig.headers['x-auth-token'] = localStorage.getItem('token') || '';
        
        const response = await fetch(api + endpoint, {
            ...authConfig,
            body: JSON.stringify(body)
        });

        return await response.json();
    }catch(e){
        return e;
    }
}

export const authenticateOnAPI = async (token) => {
    try{
        authConfig.headers['x-auth-token'] = token;
        
        const response = await fetch(api + '/auth/authenticate', authConfig);

        return await response.json();
    }catch(e){
        return e;
    }
}