import {RECEIVE_LIKE,
        GET_POST_LIKES,
        DELETE_LIKE}
from '../actions/like_actions';
import {merge} from 'lodash';
import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';



const likesReducer = (state={}, action) => {
Object.freeze(state);

let newState;
switch(action.type) {
    case RECEIVE_LIKE:
        newState = {[action.like.id]:action.like};
        return merge({},state,newState);
    case GET_POST_LIKES:
        newState = action.likes;
        return merge({},state,newState);
    case LOGOUT_CURRENT_USER:
        return {};
        
    case DELETE_LIKE:
        newState = merge({}, state);
        delete newState[action.id];
        return newState;
   
    default:
        return state;
}
}

export default likesReducer;