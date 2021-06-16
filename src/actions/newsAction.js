import axios from 'axios';
import { newsUrl } from '../api';

export const getNews = () => async (dispatch) => {
    const res = await axios.get(newsUrl());
    dispatch({
        type: 'GET_NEWS',
        payload: {
            news: res.data.data,
        },
    });
};
