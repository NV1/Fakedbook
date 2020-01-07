import React from 'react'
import CommentForm from './CommentForm';
import Comment from './Comment';
import {Link} from 'react-router-dom'

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.state = {
            editDrop: false,
            editPost: false,
            post: {
                id: this.props.post.id,
                author_id: this.props.post.author_id,
                profile_id: this.props.post.profile_id,
                content: this.props.post.content
            }
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.editPost = this.editPost.bind(this);
        this.submitUpdate = this.submitUpdate.bind(this);
        this.updatePostContent = this.updatePostContent.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.likeButtonPress = this.likeButtonPress.bind(this);
        this.unlikeButtonPress = this.unlikeButtonPress.bind(this);
    }

    handleButtonClick() {  
        this.setState( {
            editDrop: !this.state.editDrop,
          
        });
      
    }

    deletePost() {
        this.props.destroyPost(this.props.post.id)
    }

    editPost() {
        this.setState({
            editPost: true,
            editDrop: false
        })
    }

    submitUpdate() {
        this.props.patchPost(this.state.post);
        this.setState({
            editPost:false
        })
    }

    updatePostContent(e) {
        this.setState({
            post:{
                id: this.props.post.id,
                author_id: this.props.post.author_id,
                profile_id: this.props.post.profile_id,
                content: e.target.value
            }
        })
    }

    keyPress(e) {
        if(e.keyCode == 13){
            this.submitUpdate();
         }
    }



    handleClickOutside(event) {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            editDrop: false,
          });
        }
      };
      

    componentDidMount() {
        this.props.fetchPostComments(this.props.post.id);
        document.addEventListener("mousedown", this.handleClickOutside);
        this.props.fetchPostLikes(this.props.post.id)
    }

    likeButtonPress() {
        this.props.createLike({post_id: this.props.post.id, user_id:this.props.currentUser.id})
    }

    unlikeButtonPress() {

        let likesKeys = Object.keys(this.props.likes);
        let id  = 0;
        for(let i = 0; i < likesKeys.length; i++) {
            if(this.props.likes[likesKeys[i]].post_id === this.props.post.id) {
                
                if(this.props.likes[likesKeys[i]].user_id === this.props.currentUser.id) {
                    id = likesKeys[i]
                }
            }
            
        }
        this.props.destroyLike(id)
    }

    
    componentDidUpdate(prevProps) {
        if(!(prevProps.post===this.props.post)) {
            this.props.fetchPostComments(this.props.post.id);
        }
    }

    componentWillUnmount () {
        document.removeEventListener("mousedown", this.handleClickOutside); 
    }

    render() {
        let numLikes = 0;
        let userLike = false;
        let likesKeys = Object.keys(this.props.likes);
        for(let i = 0; i < likesKeys.length; i++) {
            if(this.props.likes[likesKeys[i]].post_id === this.props.post.id) {
                numLikes += 1;
                if(this.props.likes[likesKeys[i]].user_id === this.props.currentUser.id) {
                    userLike = true;
                }
            }
            
        }
        let comments = [];
        let keys = Object.keys(this.props.comments);
        for(let i = 0; i< keys.length; i++) {
            if(this.props.comments[keys[i]].post_id === this.props.post.id) {
                comments.push(this.props.comments[keys[i]]);
            }
        }
        let commentComponents = [];
        for(let i =0 ;i< comments.length;i++) {
            let component = <Comment comment={comments[i]}
                                users={this.props.users}
                                deleteComment={this.props.destroyComment}
                                patchComment={this.props.patchComment}
                                currentUser={this.props.currentUser}
                                key={comments[i].id}/>
            commentComponents.push(component);
        }

        let commentComponent;
        if(commentComponents.length>0){
            commentComponent = <div className="comments-container">
                {commentComponents}
            </div>
        } else {
            commentComponent = <div></div>
        }
        
        let header = <p>Not found</p>;
        if(this.props.users[this.props.post.author_id]!=undefined && this.props.users[this.props.post.profile_id] != undefined){
            if(this.props.post.author_id === this.props.post.profile_id
                && this.props.post.author_id === this.props.currentUser.id) {
                header = 
                <div className="post-head-container">
                <div className="post-header">
                <div className="post-user-profile-pic" ><img className="post-user-profile-pic-pic"
                 src={this.props.users[this.props.post.author_id].photoUrl}></img></div>
                <Link to={`/${this.props.post.author_id}/profile`} className="profile-link">
                <p> {this.props.users[this.props.post.author_id].first_name}</p><p>{this.props.users[this.props.post.author_id].last_name}</p>
                </Link>
                </div>
                <div className="post-dropdown-container" ref={this.container}>
                <button className="post-dropdown-button" onClick={this.handleButtonClick}>
                ☰
                </button>
                {this.state.editDrop && <div className="post-dropdown">
                    <ul>
                    <li className="post-dropdown-li"
                    onClick={this.deletePost}>Remove Post</li>
                    <li className="post-dropdown-li"
                    onClick={this.editPost}>Edit Post</li>
                    </ul>
                </div>}
                </div>
                </div>
                
            }
            else if (this.props.post.author_id === this.props.post.profile_id) {
                header = <div><div className="post-header">
                <div className="post-user-profile-pic" ><img className="post-user-profile-pic-pic"
                 src={this.props.users[this.props.post.author_id].photoUrl}></img></div>
                <Link to={`/${this.props.post.author_id}/profile`} className="profile-link">
                <p> {this.props.users[this.props.post.author_id].first_name}</p><p>{this.props.users[this.props.post.author_id].last_name}</p>
                </Link>
                </div>
                </div>
            }
            else if (this.props.post.author_id === this.props.currentUser.id){
                header = <div className="post-head-container"><div className="post-header">
                <div className="post-user-profile-pic" ><img className="post-user-profile-pic-pic"
                 src={this.props.users[this.props.post.author_id].photoUrl}></img></div>
                 <Link to={`/${this.props.post.author_id}/profile`} className="profile-link">
                <i >{this.props.users[this.props.post.author_id].first_name} </i>
                
                <i >{this.props.users[this.props.post.author_id].last_name} </i>
                </Link>
                            <div className="arrow-right"></div>
                <div className="post-user-profile-pic" ><img className="post-user-profile-pic-pic"
                 src={this.props.users[this.props.post.profile_id].photoUrl}></img></div>
                 <Link to={`/${this.props.post.profile_id}/profile`} className="profile-link">
                <i >{this.props.users[this.props.post.profile_id].first_name}</i>
                <i >{this.props.users[this.props.post.profile_id].last_name}
                </i>
                </Link>
                </div>
                <div className="post-dropdown-container" ref={this.container}>
                <button className="post-dropdown-button" onClick={this.handleButtonClick}>
                ☰
                </button>
                {this.state.editDrop && <div className="post-dropdown">
                    <ul>
                    <li className="post-dropdown-li"
                    onClick={this.deletePost}>Remove Post</li>
                    <li className="post-dropdown-li"
                    onClick={this.editPost}>Edit Post</li>
                    </ul>
                </div>}
                </div>
                </div>
            }
            else {
                header = <div className="post-header">
                    <div className="post-user-profile-pic" ><img className="post-user-profile-pic-pic"
                 src={this.props.users[this.props.post.author_id].photoUrl}></img></div>
                 <Link to={`/${this.props.post.author_id}/profile`} className="profile-link">
                <i >{this.props.users[this.props.post.author_id].first_name} </i>
                
                <i >{this.props.users[this.props.post.author_id].last_name} </i>
                </Link>
                            <div className="arrow-right"></div>
                <div className="post-user-profile-pic" ><img className="post-user-profile-pic-pic"
                 src={this.props.users[this.props.post.profile_id].photoUrl}></img></div>
                 <Link to={`/${this.props.post.profile_id}/profile`} className="profile-link">
                <i >{this.props.users[this.props.post.profile_id].first_name}</i>
                <i >{this.props.users[this.props.post.profile_id].last_name}
                </i>
                </Link></div>
            } 
         }
         let img = <div></div>
         if(this.props.post.photoUrl != undefined) {
             img = <img src={this.props.post.photoUrl} className="post-photo"/>
             
         }

         let postContent =<p>{this.props.post.content}</p>;

         if(this.state.editPost ) {
             postContent = <textarea type="text"
             className="edit-post-input"
             value={this.state.post.content}
             onChange={this.updatePostContent}
             onKeyDown={this.keyPress}>

             </textarea>
         }

         let likeButton =   <button className="like-button"
         onClick={this.likeButtonPress}>
             <i className="like-button-img">

             </i>
             Like Post
         </button>

         if(userLike) {
             likeButton = <button className="unlike-button"
             onClick={this.unlikeButtonPress}>
                 <i className="like-button-img">
    
                 </i>
                 Unlike Post
             </button>
         }

        return(
            <div className="post">
                <div className="post-header-container">
                    {header}
                    </div>
                <div className="post-content">
                {postContent}
                {img}
                <div className="post-like-bar"> 
                <div className="post-like-bar-left">
                <i className="likes">
                    
                </i>
                <i className="likes-num">
                {numLikes} 
                </i>
                <i className="likes-num">
                    Likes
                </i>
                </div>
                {likeButton}
                </div>
                </div>
                {commentComponent}
                <CommentForm currentUser={this.props.currentUser}
                createComment={this.props.createComment}
                postId={this.props.post.id} 
                currentUserId={this.props.currentUser.id}/>
            </div>
        )
    }
}

export default Post;