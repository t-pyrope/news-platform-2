import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import News from './pages/News';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Page404 from './pages/Page404';
import './assets/main.scss';

function App() {
    const location = useLocation();
    return (
        <div className='App'>
            <Header />
            <Switch location={location} key={location.pathname}>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/news'>
                    <News />
                </Route>
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route>
                    <Page404 />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
