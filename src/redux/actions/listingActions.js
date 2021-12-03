import { makeRequest } from '../../api';
import {
    REQUEST_PHOTOS_PENDING,
    REQUEST_PHOTOS_SUCCESS,
    REQUEST_PHOTOS_REJECT,
    REQUEST_POSTS_PENDING,
    REQUEST_POSTS_SUCCESS,
    REQUEST_POSTS_REJECT 
} from '../types/index';

const PHOTOS_LIMIT = 10;

export function requestPhotos(offset) {
    return async (dispatch) => {
        dispatch(requestPhotosPending());
        
        try{
            const response = await makeRequest(`/listing/photos?offset=${offset}&limit=${PHOTOS_LIMIT}`);
            console.log(response.response)
            if(response.errors) throw new Error(response.errors);
            
            dispatch(requestPhotosSuccess(response.response));
        }catch(e){
            console.log(e)
            dispatch(requestPhotosReject(e.message));
        }
    }
}
const requestPhotosPending = () => ({
    type: REQUEST_PHOTOS_PENDING,
    payload: true
});
const requestPhotosSuccess = (photos) => ({
    type: REQUEST_PHOTOS_SUCCESS,
    payload: photos
});
const requestPhotosReject = (error) => ({
    type: REQUEST_PHOTOS_REJECT,
    payload: error
});

export function requestPosts() {
    return async (dispatch) => {
        dispatch(requestPostsPending());
        
        try{
            const response = await makeRequest('/listing/posts');
            
            if(response.errors) throw new Error(response.errors);
            
            dispatch(requestPostsSuccess(response.response));
        }catch(e){
            console.log(e)
            dispatch(requestPostsReject(e.message));
        }
    }
}
const requestPostsPending = () => ({
    type: REQUEST_POSTS_PENDING,
    payload: true
});
const requestPostsSuccess = (posts) => ({
    type: REQUEST_POSTS_SUCCESS,
    payload: posts
});
const requestPostsReject = (error) => ({
    type: REQUEST_POSTS_REJECT,
    payload: error
});