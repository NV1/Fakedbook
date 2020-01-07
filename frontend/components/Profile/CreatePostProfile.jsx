import React from 'react';

class CreatePostProfile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            author_id: this.props.currentUserId,
            profile_id: this.props.user.id,
            content: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit() {
        this.props.createPost(this.state);
        this.setState({
            content: ""
        })
    }

    handleChange(e) {
       
            this.setState({
                content:e.currentTarget.value
            })
            
    }

    render() {

        let input;
        if(this.props.user.id === this.props.currentUserId) {
            input =
            <textarea value={this.state.content} className="create-post-form-input-area" onChange={this.handleChange} placeholder={`What's on your mind, ${this.props.user.first_name}? `} />
        } else {
            input =
            <textarea value={this.state.content} className="create-post-form-input-area" onChange={this.handleChange} placeholder={`Write something to ${this.props.user.first_name}...`} />
        }
        return(
            <div className="create-post-form">
                <div className="create-post-form-header">
                    <p>Create Post</p>
                </div>
                <div className="create-post-form-input">
                    <div className="create-post-form-input-image-div">
                    <img className="create-post-form-input-image" src={this.props.user.photoUrl}>
                    </img>
                    </div>
                   {input}
                </div>
                <div className="create-post-form-footer">
                    <button className="create-post-form-button" onClick={() => this.handleSubmit()}>Create Post</button>
                    </div>    
            </div>
        )
    }

}

export default CreatePostProfile;