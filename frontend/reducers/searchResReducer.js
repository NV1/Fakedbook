import {RECEIVE_USERS, RECEIVE_USER} from '../actions/user_actions';
import { GET_FRIENDS } from '../actions/friends_actions';
const searchResResducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USERS:
            let newState = {};
            let keys = Object.keys(action.users);
            for(let i =0; i<keys.length;i++){
                newState[keys[i]] = action.users[keys[i]];
            }
            return merge({},newState);
       
        default:
            return state;
    }
}

export default searchResResducer;