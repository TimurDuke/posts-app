import axiosApi from "../../axiosApi";
import {useToastSuccess} from "../../hooks";

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';

const fetchCommentsRequest = () => ({type: FETCH_COMMENTS_REQUEST});
const fetchCommentsSuccess = (comments) => ({type: FETCH_COMMENTS_SUCCESS, payload: comments});
const fetchCommentsFailure = (error) => ({type: FETCH_COMMENTS_FAILURE, payload: error});

const createCommentRequest = () => ({type: CREATE_COMMENT_REQUEST});
const createCommentSuccess = () => ({type: CREATE_COMMENT_SUCCESS});
const createCommentFailure = (error) => ({type: CREATE_COMMENT_FAILURE, payload: error});

export const fetchComments = (id) => {
    return async dispatch => {
        try{
            dispatch(fetchCommentsRequest());

            const response = await axiosApi('/comments?post=' + id);
            dispatch(fetchCommentsSuccess(response.data));
        } catch (e) {
            dispatch(fetchCommentsFailure(e.message));
        }
    };
};

export const createComment = (data) => {
    return async dispatch => {
        try{
            dispatch(createCommentRequest());

            await axiosApi.post('/comments', data);
            await dispatch(createCommentSuccess());
            useToastSuccess('Comment successfully created.')
        } catch (e) {
            dispatch(createCommentFailure(e.message));
        }
    };
};