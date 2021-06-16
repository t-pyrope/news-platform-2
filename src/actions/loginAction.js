import { validateUrl } from '../api';
import axios from 'axios';
import convertErrMessage from '../helpers/convertErrMessage';

export const loginAction = (params) => async (dispatch) => {
    dispatch({
        type: 'IS_LOADING',
    });
    axios
        .post(validateUrl, params, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
        })
        .then((res) => {
            if (res.data.status === 'ok') {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: {
                        id: res.data.data.id,
                    },
                });
                return res.data.data.id;
            }
            if (res.data.status === 'err') {
                dispatch({
                    type: 'LOGIN_FAILURE',
                    payload: {
                        errorMsg: convertErrMessage(res.data.message),
                    },
                });
            }
        })
        .catch((err) => {
            dispatch({
                type: 'LOGIN_FAILURE',
                payload: {
                    errorMsg: convertErrMessage(err.msg),
                },
            });
        });
};

export const handleError = (err) => ({
    type: 'LOGIN_FAILURE',
    payload: {
        errorMsg: convertErrMessage(err),
    },
});

export const logOut = () => {
    localStorage.clear();
    return {
        type: 'LOG_OUT',
    };
};

export const clearError = () => {
    return { type: 'CLEAR_ERROR' };
};
