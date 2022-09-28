import axiosApi from "../../axiosApi";
import {historyPush} from "./historyActions";
import {useToastSuccess} from "../../hooks";

export const CLEAR_REGISTER_ERRORS = 'CLEAR_REGISTER_ERRORS';
export const clearRegisterErrors = () => ({type: CLEAR_REGISTER_ERRORS});

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

const registerUserRequest = () => ({type: REGISTER_USER_REQUEST});
const registerUserSuccess = userData => ({type: REGISTER_USER_SUCCESS, userData});
const registerUserFailure = error => ({type: REGISTER_USER_FAILURE, error});

export const registerUser = userData => {
    return async dispatch => {
        try {
            dispatch(registerUserRequest());

            const response = await axiosApi.post('/users', userData);

            if (response.data) {
                dispatch(registerUserSuccess(response.data));
                dispatch(historyPush('/'));
            }

            if (response.status === 200) {
                useToastSuccess('You have successfully registered!');
            }
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(registerUserFailure(e.response.data));
            } else {
                dispatch(registerUserFailure({global: 'No internet'}));
            }
        }
    };
}