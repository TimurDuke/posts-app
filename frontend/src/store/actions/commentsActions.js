import axiosApi from "../../axiosApi";

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

const fetchCommentsRequest = () => ({type: FETCH_COMMENTS_REQUEST});
const fetchCommentsSuccess = (comments) => ({type: FETCH_COMMENTS_SUCCESS, payload: comments});
const fetchCommentsFailure = (error) => ({type: FETCH_COMMENTS_FAILURE, payload: error});

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