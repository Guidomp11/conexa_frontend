import { sendDataToAPI } from '../../api';
import {
    SIGNIN_PENDING,
    SIGNIN_SUCCESS,
    SIGNIN_REJECT,
    SIGNUP_PENDING,
    SIGNUP_SUCCESS,
    SIGNUP_REJECT,
    AUTH_PENDING,
    AUTH_SUCCESS,
    AUTH_REJECT,
    CLEAN_ERRORS,
    LOGOUT
} from '../types/index';

export function signIn(email, password) {
    return async (dispatch) => {
        dispatch(signInPending());
        
        try{
            const response = await sendDataToAPI('/auth/signin', {email, password});
            
            if(response.errors) throw new Error(response.errors);
            
            localStorage.setItem('token', response.response.token);
            
            dispatch(signInSuccess(response.response));
        }catch(e){
            dispatch(signInReject(e.message));
        }
    }
}
const signInPending = () => ({
    type: SIGNIN_PENDING,
    payload: true
});
const signInSuccess = (user) => ({
    type: SIGNIN_SUCCESS,
    payload: user
});
const signInReject = (error) => ({
    type: SIGNIN_REJECT,
    payload: error
});

export function signUp(username, email, password){
    return async (dispatch) => {
        dispatch(signUpPending());
        
        try{
            const response = await sendDataToAPI('/auth/signup', {username, email, password});
            
            if(response.errors) throw new Error(response.errors);
            
            localStorage.setItem('token', response.response.token);
            
            dispatch(signUpSuccess(response.response));
        }catch(e){  
            dispatch(signUpReject(e.message));
        }
    }
}
const signUpPending = () => ({
    type: SIGNUP_PENDING,
    payload: true
});
const signUpSuccess = (user) => ({
    type: SIGNUP_SUCCESS,
    payload: user
});
const signUpReject = (error) => ({
    type: SIGNUP_REJECT,
    payload: error
});


export function authenticateUser(auth) {
    return async (dispatch) => {

        dispatch(authenticationPending());

        try{
            dispatch(authenticationSuccess({
                user: auth.user,
                token: auth.token
            }));
        }catch(e){
            localStorage.setItem('token', '');
            dispatch(authenticationReject(e.message));
        }
        
    }
}
const authenticationPending = () => ({
    type: AUTH_PENDING,
    payload: true
});
const authenticationSuccess = (user) => ({
    type: AUTH_SUCCESS,
    payload: user
});
const authenticationReject = (error) => ({
    type: AUTH_REJECT,
    payload: error
});


export function cleanErrors(){
    return (dispatch) => {
        dispatch({
            type: CLEAN_ERRORS,
            payload: null
        });
    }
}

export function logoutUser(){
    return (dispatch) => {
        
        localStorage.setItem('token', '');

        dispatch({
            type: LOGOUT,
            payload: null
        });
    }
}