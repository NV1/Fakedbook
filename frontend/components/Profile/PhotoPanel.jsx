import React from 'react';

class PhotoPanel extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.fetchPosts(this.props.profileId)
    }

    componentDidUpdate(prevProps) {
        if(!(this.props.profileId === prevProps.profileId) ) {
            this.props.fetchPosts(this.props.profileId)
        }
    }


    render() {

        let picsList = [];
        let picKeys = Object.keys(this.props.posts);
        for(let j = 0 ;j < picKeys.length; j++){
            let curPost = this.props.posts[picKeys[j]];
            if(curPost.photoUrl != undefined) {
                picsList.push(
                    <img src={curPost.photoUrl} className="friend-pic"
                    key={j} />
                )
            }
        }
        return (
            <div className="profile-photo-panel">
                <div className="profile-friends-panel-header">{`Photos       ${picsList.length}`}</div>
                <ul className="friends-panel-list">
                {picsList}
                </ul>
            </div>
        )
    }

}

export default PhotoPanel;