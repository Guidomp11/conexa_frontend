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
} from "../types";

const initialState = {
    loading: false,
    token: '',
    user: null,
    errors: null
};

export default function(state = initialState, action){
    switch(action.type){
        case SIGNIN_PENDING:
        case SIGNUP_PENDING:
        case AUTH_PENDING:
            return {
                ...state,
                loading: true,
                errors: null
            }
        case SIGNIN_SUCCESS:
        case SIGNUP_SUCCESS:
        case AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                token: action.payload.token,
                errors: null
            }
        case SIGNIN_REJECT:
        case SIGNUP_REJECT:
        case AUTH_REJECT:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        case CLEAN_ERRORS:
            return{
                ...state,
                errors: action.payload
            }
        case LOGOUT:
            return{
                ...state,
                user: null,
                token: ''
            }
        default: 
            return state;
    }
} 