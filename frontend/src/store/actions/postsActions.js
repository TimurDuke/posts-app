import axiosApi from "../../axiosApi";

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

export const CREATE_POSTS_REQUEST = 'CREATE_POSTS_REQUEST';
export const CREATE_POSTS_SUCCESS = 'CREATE_POSTS_SUCCESS';
export const CREATE_POSTS_FAILURE = 'CREATE_POSTS_FAILURE';

const fetchPostsRequest = () => ({type: FETCH_POSTS_REQUEST});
const fetchPostsSuccess = posts => ({type: FETCH_POSTS_SUCCESS, payload: posts});
const fetchPostsFailure = error => ({type: FETCH_POSTS_FAILURE, payload: error});

const fetchPostRequest = () => ({type: FETCH_POST_REQUEST});
const fetchPostSuccess = post => ({type: FETCH_POST_SUCCESS, payload: post});
const fetchPostFailure = error => ({type: FETCH_POST_FAILURE, payload: error});

const createPostsRequest = () => ({type: CREATE_POSTS_REQUEST});
const createPostsSuccess = () => ({type: CREATE_POSTS_SUCCESS});
const createPostsFailure = error => ({type: CREATE_POSTS_FAILURE, payload: error});


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

export const fetchPost = id => {
    return async dispatch => {
        try {
            dispatch(fetchPostRequest());

            const response = await axiosApi('/posts/' + id);
            dispatch(fetchPostSuccess(response.data));
        } catch (e) {
            dispatch(fetchPostFailure(e.message));
        }
    };
};

export const createPost = (postData) => {
    return async dispatch => {
        try {
            dispatch(createPostsRequest());
            await axiosApi.post('/posts', postData);
            dispatch(createPostsSuccess());
        } catch (e) {
            dispatch(createPostsFailure(e.message));
            throw e;
        }
    }
};