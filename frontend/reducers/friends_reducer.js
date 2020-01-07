import {DELETE_FRIEND, UPDATE_FRIEND, NEW_FRIEND,GET_FRIENDS} from '../actions/friends_actions';
import {merge} from 'lodash'


const friendsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case NEW_FRIEND:
            let newState = {[action.friend.id]:action.friend}
            return merge({}, state, newState)
        case UPDATE_FRIEND:
            newState = {[action.friend.id]:action.friend};
            newState[action.friend.id].status = true;
            return merge({},newState)
        case DELETE_FRIEND:
            let updatedState = Object.assign({}, state);
            delete updatedState[action.friend.id];
            return updatedState;
        case GET_FRIENDS:
             newState = {};
            let keys = Object.keys(action.friends);
            for(let i = 0;i<keys.length; i++) {
                newState[keys[i]] = action.friends[keys[i]]
            }
            return merge({},state,newState)
        default:
            return state
    }
}

export default friendsReducer;
