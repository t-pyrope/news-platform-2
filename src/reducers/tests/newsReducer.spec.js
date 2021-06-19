import newsReducer from '../newsReducer';

describe('news reducer', () => {
    it('gets news', () => {
        const initState = {
            news: [],
        };

        const action = {
            type: 'GET_NEWS',
            payload: {
                news: [1, 2, 3],
            },
        };

        expect(newsReducer(initState, action)).toEqual({
            news: [1, 2, 3],
        });
    });
});
