import profileReducer from '../profileReducer';

describe('profile reducer', () => {
    it('gets correctly user data', () => {
        const initState = {
            userId: '',
            city: '',
            languages: [],
            social: [],
            errorMsgProfile: '',
            isLoading: true,
        };

        const action = {
            type: 'GET_USER_DATA',
            payload: {
                userId: '10',
                city: 'Сьюдад-Хуарес',
                languages: ['Russian', 'Sanskrit', 'Faroese'],
                social: [
                    {
                        label: 'vk',
                        link: 'vk.com/maxpfrontend',
                    },
                    {
                        label: 'telegram',
                        link: 't.me/maxpfrontend',
                    },
                ],
            },
        };

        expect(profileReducer(initState, action)).toEqual({
            userId: '10',
            city: 'Сьюдад-Хуарес',
            languages: ['Russian', 'Sanskrit', 'Faroese'],
            social: [
                {
                    label: 'vk',
                    link: 'vk.com/maxpfrontend',
                },
                {
                    label: 'telegram',
                    link: 't.me/maxpfrontend',
                },
            ],
            errorMsgProfile: '',
            isLoading: false,
        });
    });

    it('returns error getting profile data correctly', () => {
        const initState = {
            userId: '',
            city: '',
            languages: [],
            social: [],
            errorMsgProfile: '',
            isLoading: true,
        };

        const action = {
            type: 'USER_DATA_FAILURE',
            payload: {
                errorMsg: 'something went wrong...',
            },
        };

        expect(profileReducer(initState, action)).toEqual({
            userId: '',
            city: '',
            languages: [],
            social: [],
            errorMsgProfile: 'something went wrong...',
            isLoading: false,
        });
    });

    it('clears user data', () => {
        const initState = {
            userId: '10',
            city: 'Сьюдад-Хуарес',
            languages: ['Russian', 'Sanskrit', 'Faroese'],
            social: [
                {
                    label: 'vk',
                    link: 'vk.com/maxpfrontend',
                },
                {
                    label: 'telegram',
                    link: 't.me/maxpfrontend',
                },
            ],
            errorMsgProfile: '',
            isLoading: false,
        };

        const action = {
            type: 'CLEAR_USER_DATA',
        };

        expect(profileReducer(initState, action)).toEqual({
            userId: '',
            city: '',
            languages: [],
            social: [],
            errorMsgProfile: '',
            isLoading: false,
        });
    });
    it('updates state while fetching data - isLoading', () => {
        const initState = {
            userId: '',
            city: '',
            languages: [],
            social: [],
            errorMsgProfile: '',
            isLoading: false,
        };

        const action = {
            type: 'IS_LOADING',
        };

        expect(profileReducer(initState, action)).toEqual({
            userId: '',
            city: '',
            languages: [],
            social: [],
            errorMsgProfile: '',
            isLoading: true,
        });
    });
});
