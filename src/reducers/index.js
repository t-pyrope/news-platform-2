import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
    user: loginReducer,
    news: newsReducer,
});

export default rootReducer;
