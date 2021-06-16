import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginAction, clearError } from '../actions/loginAction';
import ErrorMessage from '../components/ErrorMessage';
import { validEmail } from '../helpers/regex';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();
    const { errorMsg, isLogged, isLoading } = useSelector(
        (state) => state.user,
    );

    useEffect(() => {
        if (isLogged) history.goBack();
    }, [isLogged, history]);

    useEffect(() => {
        dispatch(clearError());
    }, [dispatch]);

    const inputHandler = (e) => {
        const id = e.currentTarget.id;
        const value = e.currentTarget.value;
        switch (id) {
            case 'user':
                setUser(value);
                if (!validEmail.test(value)) setEmailErr(true);
                if (validEmail.test(value)) setEmailErr(false);
                break;
            case 'password':
                setPassword(e.currentTarget.value);
                break;
            default:
        }
    };

    const loginSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(loginAction({ email: user, password: password }));
        setPassword('');
        e.target[0].invalid = true;
        e.target[1].invalid = true;
    };

    return (
        <main>
            {errorMsg ? <ErrorMessage msg={errorMsg} /> : ''}
            <form onSubmit={(e) => loginSubmitHandler(e)} className='form'>
                <div className='form__part form__part_withWarn'>
                    <input
                        type='email'
                        placeholder='Email'
                        id='user'
                        value={user}
                        onChange={(e) => inputHandler(e)}
                        className='form__input'
                    />
                    <span className='form__warn'>
                        {emailErr ? 'Please, provide a real email' : '\u00A0'}
                    </span>
                </div>
                <div className='form__part'>
                    <input
                        type='password'
                        placeholder='Password'
                        id='password'
                        value={password}
                        onChange={(e) => inputHandler(e)}
                        className='form__input'
                    />
                </div>
                <button
                    className='form__button'
                    disabled={isLoading || !password || emailErr}
                >
                    {isLoading ? 'Checking...' : 'Submit'}
                </button>
            </form>
        </main>
    );
};

export default Login;
