import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import loginAction from '../actions/loginAction';
import ErrorMessage from '../components/ErrorMessage';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const { errorMsg, username } = useSelector((state) => state.user);

    useEffect(() => {
        if (username) history.push('/profile');
    }, [username, history]);

    const inputHandler = (e) => {
        const id = e.currentTarget.id;
        switch (id) {
            case 'user':
                setUser(e.currentTarget.value);
                break;
            case 'password':
                setPassword(e.currentTarget.value);
                break;
            default:
        }
    };

    const loginSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(loginAction({ username: user, password: password }));
        setUser('');
        setPassword('');
        e.target[0].invalid = true;
        e.target[1].invalid = true;
    };

    return (
        <main>
            {errorMsg ? <ErrorMessage msg={errorMsg} /> : ''}
            <form onSubmit={(e) => loginSubmitHandler(e)} className='form'>
                <input
                    type='text'
                    placeholder='username'
                    id='user'
                    value={user}
                    onChange={(e) => inputHandler(e)}
                    className='form__input'
                />
                <input
                    type='password'
                    placeholder='password'
                    id='password'
                    value={password}
                    onChange={(e) => inputHandler(e)}
                    className='form__input'
                />
                <button className='form__button'>Submit</button>
            </form>
        </main>
    );
};

export default Login;
