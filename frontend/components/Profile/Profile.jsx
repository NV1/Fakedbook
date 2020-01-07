import React from 'react';
import CreatePostProfile from './CreatePostProfile';
import Post from '../NewsFeed/Posts/Post';
import FriendsPanel from './FriendsPanel';
import {arrMatch} from '../../util/ArrayUtil'
import PhotoPanel from './PhotoPanel';

class Profile extends React.Component {

    constructor(props){
        super(props);

        this.handleFriend = this.handleFriend.bind(this);
        this.handleDeleteFriend = this.handleDeleteFriend.bind(this);
        this.handleUpdateFriend = this.handleUpdateFriend.bind(this);
        
    }

    componentDidMount() {
        this.props.receiveUserById(this.props.profileUserId)
        this.props.getAllFriends();
        
        this.props.fetchPosts(this.props.profileUserId);
    }

    

    componentDidUpdate(prevProps) {

        if(!(prevProps.profileUserId === this.props.profileUserId)){
            this.props.fetchPosts(this.props.profileUserId);
            this.props.receiveUserById(this.props.profileUserId);
        }
        if(!(prevProps.posts === this.props.posts)) {
            let keys = Object.keys(this.props.posts)
            for(let i = 0;i<keys.length;i++) {
            this.props.receiveUserById(this.props.posts[keys[i]].author_id);
            this.props.receiveUserById(this.props.posts[keys[i]].profile_id);
            }
        }
        if(!(prevProps.friends === this.props.friends)) {
            let keys = Object.keys(this.props.friends)
            for(let i = 0;i<keys.length;i++){
            this.props.receiveUserById(this.props.friends[keys[i]].user_one_id);
            this.props.receiveUserById(this.props.friends[keys[i]].user_two_id);
            }
        }
    }

    handleFriend() {
        let friend = {
            user_one_id: this.props.currentUser.id,
            user_two_id: this.props.profileUserId,
            status: false
        }
        this.props.newFriend(friend)
    }

    handleDeleteFriend(id) {
        let friend = {
            id:id,
            user_one_id: this.props.currentUser.id,
            user_two_id: this.props.profileUserId,
            status: false
        }
        friend.id = id;
        this.props.deleteFriendRequest(friend);
        
    }

    handleUpdateFriend(id) {
        let friend = {
            id:id,
            user_one_id: this.props.currentUser.id,
            user_two_id: this.props.profileUserId,
            status: true
        }
        friend.id = id;
        this.props.updateFriendRequest(friend);
        
    }

    render() {
        let button=<div></div>;
        let friend ;
        if(this.props.users[this.props.profileUserId] === undefined){
            return (
                <div></div>
            )
        }
        if(!(this.props.profileUserId === this.props.currentUser.id)) {
            let keys = Object.keys(this.props.friends);
            for(let i =0; i< keys.length;i++) {
                let curFriend = this.props.friends[keys[i]];
                if(curFriend.user_one_id === this.props.currentUser.id 
                    && curFriend.user_two_id === this.props.profileUserId) {
                     friend = curFriend   
                    }
                if(curFriend.user_one_id === this.props.profileUserId 
                     && curFriend.user_two_id === this.props.currentUser.id) {
                     friend = curFriend   
                }
            }
            if(friend != undefined) {
                if(friend.status === true) {
                    button = <button onClick= {() => this.handleDeleteFriend(friend.id)} 
                    className="profile-remove-friend-button"><i className="remove-friend-icon"></i>Remove Friend</button>;
                }else {
                    if(friend.user_one_id ===  this.props.currentUser.id && friend.user_two_id === this.props.profileUserId){

                        button = <button onClick= {() => this.handleDeleteFriend(friend.id)}
                        className="profile-add-friend-button"><i className="add-friend-icon"></i>Cancel Request</button>;
                    } else if(friend.user_one_id ===  this.props.profileUserId && friend.user_two_id === this.props.currentUser.id){
                        button = [
                        
                            <button key={0} onClick= {() => this.handleUpdateFriend(friend.id)}
                            className="profile-add-friend-button-request"><i className="add-friend-icon"></i>Accept Request</button>,
                        <button key={1} onClick= {() => this.handleDeleteFriend(friend.id)}
                            className="profile-add-friend-button-request"><i className="add-friend-icon"></i>Deny Request</button>];
                    }
                }
            } else {
                
                button = <button onClick= {() => this.handleFriend()}
                className="profile-add-friend-button"><i className="add-friend-icon"></i>Add Friend</button>;
                
            }
        }

        let postList = [];
        let keys = Object.keys(this.props.posts);
        let i = keys.length-1;
        for(i; i>=0;i--){
            postList.push(
                <Post 
                post={this.props.posts[keys[i]]}
                users={this.props.users}
                currentUser={this.props.currentUser}
                fetchPostComments={this.props.fetchPostComments}
                createComment={this.props.createComment}
                destroyComment = {this.props.destroyComment}
                comments={this.props.comments}
                receiveUserById={this.props.receiveUserById}
                patchComment={this.props.patchComment}
                patchPost={this.props.patchPost}
                destroyPost={this.props.destroyPost}
                key={i}
                createLike={this.props.createLike}
                destroyLike={this.props.destroyLike}
                fetchPostLikes={this.props.fetchPostLikes}
                likes={this.props.likes}/>
            )
        }



        return (
            <div className="profile-main-container">
                <div className="profile-header">
                    <img className="profile-cover-photo" src={this.props.users[this.props.profileUserId].coverPhotoUrl}>
                        
                    </img>
                        <div className="profile-header-content">
                        <img className="profile-profile-photo" src={this.props.users[this.props.profileUserId].photoUrl}>
                            
                            </img>

                        <h1>{this.props.users[this.props.profileUserId].first_name}</h1>
                        <h1>{this.props.users[this.props.profileUserId].last_name}</h1>
                        <div className="profile-header-button-container">
                        {button}
                        </div>
                </div>
                </div>
                <div className="empty-div">
                </div>
                    <div className="profile-main-content">
                        <div className="profile-side-panel">
                            <FriendsPanel
                                users={this.props.users}
                                friends={this.props.friends}
                                profileId = {this.props.profileUserId}
                                getAllFriendsById = {this.props.getAllFriendsById}
                            />
                            <PhotoPanel
                                posts={this.props.posts}
                                fetchPosts={this.props.fetchPosts}
                                profileId={this.props.profileUserId}
                            />
                        </div>
                         <div className="profile-post-panel">
                         <CreatePostProfile user={this.props.users[this.props.profileUserId]}
                          currentUserId={this.props.currentUser.id} 
                          createPost={this.props.createPost}
                          fetchPosts={this.props.fetchPosts}/>
                          {postList}
                          
                         </div>
                    </div>
                
            </div>
        )
    }

}

export default Profile;