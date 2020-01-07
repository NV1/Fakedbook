import * as APIUtil from '../util/friend_api_util';

export const DELETE_FRIEND = "DELETE_FRIEND";
export const UPDATE_FRIEND = "UPDATE_FRIEND";
export const NEW_FRIEND = "NEW_FRIEND";
export const GET_FRIENDS = "GET_FRIENDS";
export const GET_FRIENDS_BY_ID = "GET_FRIENDS_BY_ID"

export const newFriend = friend => ({
    type: NEW_FRIEND,
    friend
})

export const updateFriend = friend => ({
    type: UPDATE_FRIEND,
    friend
})

export const deleteFriend = friend => ({
    type: DELETE_FRIEND,
    friend
})

export const getFriends = friends => ({
    type: GET_FRIENDS,
    friends
})

export const newFriendRequest = friend => dispatch => (
    APIUtil.newFriendRequest(friend).then(friend => (
        dispatch(newFriend(friend))
    ))
)

export const updateFriendRequest = friend => dispatch => (
    APIUtil.updateFriendRequest(friend).then(friend => (
        dispatch(updateFriend(friend))
    ))
)

export const deleteFriendRequest = friend => dispatch => (
    APIUtil.deleteFriend(friend).then(friend => (
        dispatch(deleteFriend(friend))
    ))
)

export const getAllFriends = () => dispatch => (
    APIUtil.getFriends().then(friends => (
        dispatch(getFriends(friends))
    ))
)

export const getAllFriendsById = (id) => dispatch => (
    APIUtil.getFriendsById(id).then(friends => (
        dispatch(getFriends(friends))
    ))
)


