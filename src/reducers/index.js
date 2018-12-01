import { combineReducers } from 'redux';
import postsReducer from './PostReducer';
import usersReducer from './UsersReducer';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});

