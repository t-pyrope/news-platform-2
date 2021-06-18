import { getUserDataUrl } from '../api';
import axios from 'axios';
import convertErrMessage from '../helpers/convertErrMessage';

const getUserData = (id) => async (dispatch) => {
    dispatch({
        type: 'IS_LOADING',
    });
    axios
        .get(getUserDataUrl(id))
        .then((res) => {
            if (res.data.status === 'ok') {
                dispatch({
                    type: 'GET_USER_DATA',
                    payload: {
                        userId: res.data.data.userId,
                        city: res.data.data.city,
                        languages: res.data.data.languages,
                        social: res.data.data.social,
                    },
                });
            }
            if (res.data.status === 'err') {
                dispatch({
                    type: 'USER_DATA_FAILURE',
                    payload: {
                        errorMsg: convertErrMessage(res.data.message),
                    },
                });
            }
        })
        .catch((err) => {
            console.error(err.message);
            dispatch({
                type: 'USER_DATA_FAILURE',
                payload: {
                    errorMsg: convertErrMessage(err.message),
                },
            });
        });
};

export default getUserData;
