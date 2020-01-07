import {TOGGLE_DROP_DOWN} from '../actions/ui_actions';
import {merge} from 'lodash'
import {TOGGLE_FRIENDS_DROP} from '../actions/ui_actions'

const uiReducer = (state = {dropdown:false, friendsDropdown:false}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case TOGGLE_DROP_DOWN:
            let newToggle = !state["dropdown"];
            let newState = {dropdown: newToggle};
            return merge({},state,newState);
        case TOGGLE_FRIENDS_DROP:
             newToggle = !state["friendsDropdown"];
           newState = {friendsDropdown: newToggle};
            return merge({}, state, newState)
        default: 
            return state;
    }
}

export default uiReducer;