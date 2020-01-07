import React from 'react';
import {Link} from 'react-router-dom'

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.removeComment = this.removeComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.updateCommentState = this.updateCommentState.bind(this);
        this.updateCommentContent = this.updateCommentContent.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.state={
            comment:{
                id: this.props.comment.id,
                parent_comment_id: this.props.comment.parent_comment_id,
                content: this.props.comment.content,
                post_id: this.props.comment.post_id,
                author_id: this.props.comment.author_id,
            },
            editable:false
        }
    }

    removeComment() {
        this.props.deleteComment(this.props.comment.id);
    }

    updateComment() {
        this.props.patchComment(this.state.comment);
        this.setState({
            editable:false
        })
    }

    updateCommentState() {
        this.setState({
            editable:true
        })
    }

    updateCommentContent(e) {

        this.setState({
            comment:{
                id: this.props.comment.id,
                parent_comment_id: this.props.comment.parent_comment_id,
                post_id: this.props.comment.post_id,
                author_id: this.props.comment.author_id,
                content:e.target.value
            }
        })
    }

    keyPress(e){
        if(e.keyCode == 13){
            this.updateComment();
         }
    }

    render() {

        let contentDisp;
        if(this.state.editable) {
            contentDisp = <input type="text" className="comment-text-edit"
            value={this.state.comment.content} autoFocus
            onChange={this.updateCommentContent}
            onKeyDown={this.keyPress} />
        } else {
            contentDisp = <span type="text" className="comment-text"
            >{this.props.comment.content}
                </span>
        }
        let updateButton=null;
        let deleteButton= null;
        if(this.props.currentUser.id === this.props.comment.author_id) {
            updateButton = <button className="remove-comment-button"
                    onClick={this.updateCommentState}>
                Edit
            </button>
            deleteButton =  <button className="remove-comment-button"
                    onClick={this.removeComment}>
                Remove
            </button>
        }
        let authorInfo =[<div></div>];
            if(this.props.users[this.props.comment.author_id] != undefined) {
                authorInfo = <div className ="post-comment">
                        <div className="comment-image-div">
                        <img className="comment-image" src={this.props.users[this.props.comment.author_id].photoUrl}>
                        </img>
                        </div>
                        <div className="comment-content-div">
                        <Link to={`/${this.props.comment.author_id}/profile`}>
                        <div className="comment-content-user-name">
                        <i>{this.props.users[this.props.comment.author_id].first_name} </i>
                        <i>{this.props.users[this.props.comment.author_id].last_name} </i>
                        </div>
                        </Link>
                        {contentDisp}

                        {deleteButton}
                       {updateButton}

                    
                        
                        
                        </div>
                        </div>
            } else {
                authorInfo = <div></div>
            }
            return(
                authorInfo
            )
        }

}

export default Comment;