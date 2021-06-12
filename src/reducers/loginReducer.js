const initState = {
    username: null,
    errorMsg: '',
};

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                username: action.payload.username,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                errorMsg: action.payload.errorMsg,
            };
        default:
            return { ...state };
    }
};

export default loginReducer;
