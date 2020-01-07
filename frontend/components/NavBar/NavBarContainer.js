import NavBar from './NavBar';
import {logout} from '../../actions/session_actions';
import {fetchUsers} from '../../actions/user_actions';
import {getAllFriends} from '../../actions/friends_actions';
import {connect} from 'react-redux'
import {toggleDropDown, toggleFriendsDropdown} from '../../actions/ui_actions';
import {selectIncomingRequestsFromState} from '../../selectors/friends_selectors';
import {receiveUserById} from '../../actions/user_actions';
import {updateFriendRequest, deleteFriendRequest} from '../../actions/friends_actions';


const mapStateToProps = state => {
    return {
        user: state.entities.users[state.session.id],
        incomingRequests: selectIncomingRequestsFromState(state),
        users: state.entities.user,
        currentUser: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDropDown: () => dispatch(toggleDropDown()),
        toggleFriendsDropdown: () => dispatch(toggleFriendsDropdown()),
        fetchUsers: (search) => dispatch(fetchUsers(search)),
        getAllFriends: () => dispatch(getAllFriends()),
        receiveUserById: id => dispatch(receiveUserById(id)),
        updateFriend: friend => dispatch(updateFriendRequest(friend)),
        deleteFriend: friend => dispatch(deleteFriendRequest(friend)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);