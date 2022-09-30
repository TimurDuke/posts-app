import {
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    CREATE_POSTS_FAILURE,
    CREATE_POSTS_REQUEST,
    CREATE_POSTS_SUCCESS, FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE,
} from "../actions/postsActions";

const initialState = {
    posts: [],
    post: null,
    loading: false,
    fetchError: null,
    createError: null,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {...state, loading: true, fetchError: null};
        case FETCH_POSTS_SUCCESS:
            return {...state, loading: false, fetchError: null, posts: action.payload};
        case FETCH_POSTS_FAILURE:
            return {...state, loading: false, fetchError: action.payload};
        case FETCH_POST_REQUEST:
            return {...state, loading: true, fetchError: null};
        case FETCH_POST_SUCCESS:
            return {...state, loading: false, fetchError: null, post: action.payload};
        case FETCH_POST_FAILURE:
            return {...state, loading: false, fetchError: action.payload};

        case CREATE_POSTS_REQUEST:
            return {...state, loading: true, createError: null};
        case CREATE_POSTS_SUCCESS:
            return {...state, loading: false, createError: null};
        case CREATE_POSTS_FAILURE:
            return {...state, loading: false, createError: action.payload};
        default:
            return state;
    }
};

export default postsReducer;