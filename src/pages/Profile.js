import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import getUserData from '../actions/profileAction';
import twitter from '../img/twitter.png';
import twitch from '../img/twitch.png';
import youtube from '../img/youtube.png';
import telegram from '../img/telegram.png';
import web from '../img/globe-grid.png';
import vk from '../img/vk.png';
import ErrorMessage from '../components/ErrorMessage';
import Skeleton from '../components/Skeleton';

const Profile = () => {
    const dispatch = useDispatch();

    const { isLogged, id } = useSelector((state) => state.user);

    const { city, languages, social, errorMsgProfile, isLoading } = useSelector(
        (state) => state.profile,
    );

    const history = useHistory();

    useEffect(() => {
        if (!isLogged) history.push('/login');
    }, [history, isLogged]);

    useEffect(() => {
        if (id) dispatch(getUserData(id));
    }, [dispatch, id]);

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
                    {errorMsgProfile ? (
                        <ErrorMessage msg={errorMsgProfile} />
                    ) : (
                        <div>
                            {isLogged && city && (
                                <div>
                                    <header className='page__header'>
                                        <h1>Welcome to your profile</h1>
                                        <p className='date'>
                                            {new Date().toDateString()}
                                        </p>
                                    </header>
                                    <div className='article__paragraph'>
                                        Город: {city}
                                    </div>
                                    <div>
                                        {' '}
                                        Знание языков:
                                        <ul className='list'>
                                            {languages.map((lang) => (
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
                                            {social.map((social) => (
                                                <li
                                                    className='list__item'
                                                    key={social.label}
                                                >
                                                    <a
                                                        href={social.link}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
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
