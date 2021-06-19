import loginReducer from '../loginReducer';

describe('login reducer', () => {
    it('Returns loginning in process', () => {
        const initState = {
            id: null,
            errorMsg: '',
            isLogged: false,
            isLoading: false,
        };

        const action = {
            type: 'IS_LOADING',
        };

        expect(loginReducer(initState, action)).toEqual({
            ...initState,
            isLoading: true,
        });
    });

    it('Logges in successfully', () => {
        const initState = {
            id: null,
            errorMsg: '',
            isLogged: false,
            isLoading: true,
        };

        const action = {
            type: 'LOGIN_SUCCESS',
            payload: {
                id: '12',
            },
        };

        expect(loginReducer(initState, action)).toEqual({
            ...initState,
            isLoading: false,
            id: action.payload.id,
            errorMsg: '',
            isLogged: true,
        });
    });

    it('logges out successfully', () => {
        const initState = {
            id: 32,
            errorMsg: '',
            isLogged: true,
            isLoading: true,
        };

        const action = {
            type: 'LOG_OUT',
        };

        expect(loginReducer(initState, action)).toEqual({
            id: null,
            errorMsg: '',
            isLogged: false,
            isLoading: false,
        });
    });

    it('clears error message', () => {
        const initState = {
            id: null,
            errorMsg: 'some very serious (not really) error',
            isLogged: false,
            isLoading: false,
        };

        const action = {
            type: 'CLEAR_ERROR',
        };

        expect(loginReducer(initState, action)).toEqual({
            id: null,
            errorMsg: '',
            isLogged: false,
            isLoading: false,
        });
    });

    it('correctly updates failure of login', () => {
        const initState = {
            id: null,
            errorMsg: '',
            isLogged: false,
            isLoading: true,
        };

        const action = {
            type: 'LOGIN_FAILURE',
            payload: {
                errorMsg: 'Email or password is not correct',
            },
        };

        expect(loginReducer(initState, action)).toEqual({
            id: null,
            errorMsg: 'Email or password is not correct',
            isLogged: false,
            isLoading: false,
        });
    });
});
