import { 
    REQUEST_PHOTOS_PENDING,
    REQUEST_PHOTOS_SUCCESS,
    REQUEST_PHOTOS_REJECT,
    REQUEST_POSTS_PENDING,
    REQUEST_POSTS_SUCCESS,
    REQUEST_POSTS_REJECT 

} from "../types";

const initialState = {
    listingLoading: false,
    photos: [],
    posts: [],
    errors: null
};

export default function(state = initialState, action){
    switch(action.type){
        case REQUEST_PHOTOS_PENDING:
        case REQUEST_POSTS_PENDING:
            return{
                ...state,
                listingLoading: true,
                errors: null
            }
        case REQUEST_POSTS_SUCCESS:
            return{
                ...state,
                listingLoading: false,
                posts: action.payload
            }
        case REQUEST_PHOTOS_SUCCESS:
            return{
                ...state,
                listingLoading: false,
                photos: action.payload
            }
        case REQUEST_PHOTOS_REJECT:
        case REQUEST_POSTS_REJECT:
            return{
                ...state,
                listingLoading: false,
                errors: action.payload
            }            
        default: 
            return state;
    }
} 