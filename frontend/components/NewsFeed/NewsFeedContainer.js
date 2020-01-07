import {connect} from 'react-redux';
import NewsFeed from './NewsFeed';
import {createPost, fetchUserPosts, fetchAllPosts,
    patchPost, destroyPost} from '../../actions/posts_actions';
import {receiveUserById} from '../../actions/user_actions';
import {selectFriendPostsOnly} from '../../selectors/post_selector';
import {fetchPostComments, createComment, destroyComment,
patchComment} from '../../actions/comments_actions';
import {getAllFriends} from '../../actions/friends_actions';
import {fetchPostLikes, destroyLike, createLike} from '../../actions/like_actions'

const mapStateToProps = state => {
    return {
        user: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        posts: state.entities.posts,
        users: state.entities.user,
        friends: state.entities.friends,
        comments: state.entities.comments,
        likes: state.entities.likes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: post => dispatch(createPost(post)),
        fetchPosts: id => dispatch(fetchUserPosts(id)),
        receiveUserById: id => dispatch(receiveUserById(id)),
        fetchPostComments: post_id => dispatch(fetchPostComments(post_id)),
        createComment: comment => dispatch(createComment(comment)),
        fetchAllPosts: id => dispatch(fetchAllPosts(id)),
        destroyComment: id => dispatch(destroyComment(id)),
        patchComment: comment =>  dispatch(patchComment(comment)),
        patchPost: post => dispatch(patchPost(post)),
        destroyPost: id => dispatch(destroyPost(id)),
        getAllFriends: () => dispatch(getAllFriends()),
        createLike: like => dispatch(createLike(like)),
        destroyLike: id => dispatch(destroyLike(id)),
        fetchPostLikes: id => dispatch(fetchPostLikes(id))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(NewsFeed);