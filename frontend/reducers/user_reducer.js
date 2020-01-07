import {RECEIVE_USERS, RECEIVE_USER} from '../actions/user_actions';
import { GET_FRIENDS } from '../actions/friends_actions';

import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
const userReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USERS:
            let newState = {};
            let keys = Object.keys(action.users);
            for(let i =0; i<keys.length;i++){
                newState[keys[i]] = action.users[keys[i]];
            }
            return merge({},state,newState);
        case RECEIVE_USER:
            return merge({}, state, {[action.user.id]:action.user})
        case RECEIVE_CURRENT_USER:
            return merge({}, state, {[action.currentUser.id]:action.currentUser})
        default:
            return state;
    }
}

export default userReducer;