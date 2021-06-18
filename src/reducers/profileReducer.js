const initState = {
    userId: '',
    city: '',
    languages: [],
    social: [],
    errorMsgProfile: '',
    isLoading: false,
};

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_USER_DATA':
            return {
                ...state,
                userId: action.payload.userId,
                city: action.payload.city,
                languages: action.payload.languages,
                social: action.payload.social,
                errorMsgProfile: '',
                isLoading: false,
            };
        case 'USER_DATA_FAILURE':
            return {
                ...state,
                errorMsgProfile: action.payload.errorMsg,
                isLoading: false,
            };
        case 'CLEAR_USER_DATA':
            return {
                ...state,
                userId: '',
                city: '',
                languages: [],
                social: [],
                errorMsgProfile: '',
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

export default profileReducer;
