import {RECEIVE_COMMENT, GET_POST_COMMENTS,
        DELETE_COMMENT, UPDATE_COMMENT}
 from '../actions/comments_actions';
import {merge} from 'lodash';
import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';


const commentsReducer = (state={}, action) => {
    Object.freeze(state);

    let newState;
    switch(action.type) {
        case RECEIVE_COMMENT:
            newState = {[action.comment.id]:action.comment};
            return merge({},state,newState);
        case GET_POST_COMMENTS:
            newState = action.comments;
            return merge({},state,newState);
        case LOGOUT_CURRENT_USER:
            return {};
            
        case DELETE_COMMENT:
            newState = merge({}, state);
            delete newState[action.id];
            return newState;
        case UPDATE_COMMENT:
            newState = merge({}, state);
            newState[action.comment.id] = action.comment
            return newState;
        default:
            return state;
    }
}

export default commentsReducer;