import axiosApi from "../../axiosApi";

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const fetchPostsRequest = () => ({type: FETCH_POSTS_REQUEST});
const fetchPostsSuccess = posts => ({type: FETCH_POSTS_SUCCESS, payload: posts});
const fetchPostsFailure = error => ({type: FETCH_POSTS_FAILURE, payload: error});

export const fetchPosts = () => {
    return async dispatch => {
        try {
            dispatch(fetchPostsRequest());

            const response = await axiosApi('/posts');
            dispatch(fetchPostsSuccess(response.data));
        } catch (e) {
            dispatch(fetchPostsFailure(e.message));
        }
    };
};
