const initState = {
    id: null,
    errorMsg: '',
    isLogged: false,
    isLoading: false,
};

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                id: action.payload.id,
                errorMsg: '',
                isLogged: true,
                isLoading: false,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                errorMsg: action.payload.errorMsg,
                isLoading: false,
            };
        case 'LOG_OUT':
            return {
                ...state,
                id: null,
                errorMsg: '',
                isLogged: false,
            };
        case 'CLEAR_ERROR':
            return {
                ...state,
                errorMsg: '',
            };
        case 'IS_LOADING':
            return {
                ...state,
                isLoading: true,
            };
        default:
            return { ...state };
    }
};

export default loginReducer;
