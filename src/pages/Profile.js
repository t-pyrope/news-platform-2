import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getUserDataUrl } from '../api';
import axios from 'axios';
import twitter from '../img/twitter.png';
import twitch from '../img/twitch.png';
import youtube from '../img/youtube.png';
import telegram from '../img/telegram.png';
import web from '../img/globe-grid.png';
import vk from '../img/vk.png';
import { handleError } from '../actions/loginAction';
import ErrorMessage from '../components/ErrorMessage';
import Skeleton from '../components/Skeleton';

const Profile = () => {
    const [userData, setUserData] = useState({
        city: '',
        languages: [],
        social: [],
    });

    const dispatch = useDispatch();

    const { isLogged, id, errorMsg, isLoading } = useSelector(
        (state) => state.user,
    );
    const history = useHistory();

    useEffect(() => {
        if (!isLogged) history.push('/login');
    }, [history, isLogged]);

    useEffect(() => {
        if (id) {
            axios.get(getUserDataUrl(id)).then((res) => {
                if (res.data.status === 'ok') {
                    localStorage.clear();
                    localStorage.setItem(
                        'userData',
                        JSON.stringify(res.data.data),
                    );
                }
                if (res.data.status === 'err') {
                    dispatch(handleError(res.data.message));
                }
            });
            const data = JSON.parse(localStorage.getItem('userData'));
            setUserData(data);
        }
    }, [setUserData, dispatch, id]);

    const iconHandler = (social) => {
        switch (social) {
            case 'vk':
                return vk;
            case 'twitter':
                return twitter;
            case 'youtube':
                return youtube;
            case 'twitch':
                return twitch;
            case 'telegram':
                return telegram;
            default:
                return web;
        }
    };

    return (
        <main>
            {isLoading ? (
                <Skeleton />
            ) : (
                <div>
                    {errorMsg ? (
                        <ErrorMessage msg={errorMsg} />
                    ) : (
                        <div>
                            {isLogged && userData && (
                                <div>
                                    <header className='page__header'>
                                        <h1>Welcome to your profile</h1>
                                        <p className='date'>
                                            {new Date().toDateString()}
                                        </p>
                                    </header>
                                    <div className='article__paragraph'>
                                        Город: {userData.city}
                                    </div>
                                    <div>
                                        {' '}
                                        Знание языков:
                                        <ul className='list'>
                                            {userData.languages.map((lang) => (
                                                <li
                                                    key={lang}
                                                    className='list__item'
                                                >
                                                    {lang}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        {' '}
                                        Ссылки:
                                        <ul className='list list_line'>
                                            {userData.social.map((social) => (
                                                <li
                                                    className='list__item'
                                                    key={social.label}
                                                >
                                                    <a
                                                        href={social.link}
                                                        target='blank'
                                                    >
                                                        <img
                                                            src={iconHandler(
                                                                social.label,
                                                            )}
                                                            alt=''
                                                            width='40'
                                                            height='40'
                                                        />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </main>
    );
};

export default Profile;
