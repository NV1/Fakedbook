import React from 'react';

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post_id: this.props.postId,
            author_id: this.props.currentUserId,
            content: ""
        }
        this.submitComment = this.submitComment.bind(this);
        this.keyPress =this.keyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        
        this.setState({
            content:e.currentTarget.value
        })
        
    }
    
    submitComment() {
        this.props.createComment(this.state);
        this.setState({
            content: ""
        })
    }    

    keyPress(e){
        if(e.keyCode == 13){
            this.submitComment();
         }
    }
      

    render() {
        return(
            <div className="post-create-comment">
                <div className="post-form-user-profile-pic" >
                <img className="post-form-user-profile-pic-pic"
                 src={this.props.currentUser.photoUrl}>
                     </img></div>
                <input className="create-comment-text-input"
                type="text" placeholder="Write a comment..." 
                onKeyDown={this.keyPress}
                value={this.state.content}
                onChange={this.handleChange}/>
            </div>
        )
    }

}

export default CommentForm;