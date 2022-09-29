import {
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    CREATE_POSTS_FAILURE,
    CREATE_POSTS_REQUEST,
    CREATE_POSTS_SUCCESS,} from "../actions/postsActions";

const initialState = {
    posts: [],
    post: null,
    loading: false,
    error: null,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_POSTS_SUCCESS:
            return {...state, loading: false, posts: action.payload};
        case FETCH_POSTS_FAILURE:
            return {...state, loading: false, error: action.payload};

        case CREATE_POSTS_REQUEST:
            return {...state, loading: true, error: null};
        case CREATE_POSTS_SUCCESS:
            return {...state, loading: false};
        case CREATE_POSTS_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default postsReducer;