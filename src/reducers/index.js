import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import newsReducer from './newsReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
    user: loginReducer,
    news: newsReducer,
    profile: profileReducer,
});

export default rootReducer;
