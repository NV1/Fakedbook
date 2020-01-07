import {CREATE_POST, RECEIVE_POSTS,
       UPDATE_POST, DELETE_POST } from '../actions/posts_actions';
import {merge} from 'lodash';
import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const postsReducer = (state={},action) => {
    Object.freeze(state);

    let newState;
    switch(action.type) {
        case CREATE_POST:
             newState = {[action.post.id]: action.post};
            return merge({},state, newState);
        case RECEIVE_POSTS:
            newState = action.posts;
            return merge({}, newState);
        case LOGOUT_CURRENT_USER: 
            return {};
        case DELETE_POST:
            newState = merge({}, state);
            delete newState[action.post.id]
            return newState;
        case UPDATE_POST:
            newState = merge({}, state);
            newState[action.post.id] = action.post
            return newState;
        default:
            return state;
    }
}

export default postsReducer;