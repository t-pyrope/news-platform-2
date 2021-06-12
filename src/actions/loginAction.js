const loginAction = (params) => (dispatch) => {
    console.log(params.username.toLowerCase() === 'admin');
    console.log(params.password === '12345');
    console.log(params);
    if (
        params.username.toLowerCase() === 'admin' &&
        params.password === '12345'
    ) {
        console.log(dispatch);
        console.log('Got here');
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
                username: params.username,
            },
        });
    } else {
        dispatch({
            type: 'LOGIN_FAILURE',
            payload: {
                errorMsg: 'There is no such a user with such a password',
            },
        });
    }
};

export default loginAction;
