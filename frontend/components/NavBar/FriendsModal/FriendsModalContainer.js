import {connect} from 'react-redux';
import FriendsModal from './FriendsModal'
import {toggleFriendsDropdown} from '../../../actions/ui_actions';
import {selectIncomingRequestsFromState} from '../../../selectors/friends_selectors';
import {updateFriendRequest, deleteFriendRequest} from '../../../actions/friends_actions';

const mapStateToProps = state => {
    return {
        friendsDropdown: state.ui.friendsDropdown,
        requests: selectIncomingRequestsFromState(state),
        users: state.entities.user,
        currentUser: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDropDown: () => dispatch(toggleFriendsDropdown()),
        updateFriend: friend => dispatch(updateFriendRequest(friend)),
        deleteFriend: friend => dispatch(deleteFriendRequest(friend)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FriendsModal)