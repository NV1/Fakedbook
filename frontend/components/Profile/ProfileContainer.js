import {connect} from 'react-redux';
import Profile from './Profile';
import {receiveUserById} from '../../actions/user_actions';
import {getAllFriends, getAllFriendsById} from '../../actions/friends_actions';

import {createPost, fetchUserPosts,
        patchPost, destroyPost} from '../../actions/posts_actions';
import {newFriendRequest, updateFriendRequest, deleteFriendRequest} from '../../actions/friends_actions'

import {fetchPostComments, createComment, destroyComment,
patchComment} from '../../actions/comments_actions';

import {fetchPostLikes, destroyLike, createLike} from '../../actions/like_actions'


const mapStateToProps = (state, { match }) => {
    return {
        profileUserId: parseInt(match.params.id),
        currentUser: state.entities.users[state.session.id],
        users: state.entities.user,
        friends: state.entities.friends,
        posts: state.entities.posts,
        comments: state.entities.comments,
        likes: state.entities.likes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        receiveUserById: id => dispatch(receiveUserById(id)),
        getAllFriends: () => dispatch(getAllFriends()),
        getAllFriendsById: id => dispatch(getAllFriendsById(id)),
        newFriend: friend => dispatch(newFriendRequest(friend)),
        updateFriendRequest: friend => dispatch(updateFriendRequest(friend)),
        deleteFriendRequest: friend => dispatch(deleteFriendRequest(friend)),
        createPost: post => dispatch(createPost(post)),
        fetchPosts: id => dispatch(fetchUserPosts(id)),
        fetchPostComments: post_id => dispatch(fetchPostComments(post_id)),
        createComment: comment => dispatch(createComment(comment)),
        destroyComment: id => dispatch(destroyComment(id)),
        patchComment: comment => dispatch(patchComment(comment)),
        patchPost: post => dispatch(patchPost(post)),
        destroyPost: id => dispatch(destroyPost(id)),
        createLike: like => dispatch(createLike(like)),
        destroyLike: id => dispatch(destroyLike(id)),
        fetchPostLikes: id => dispatch(fetchPostLikes(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);