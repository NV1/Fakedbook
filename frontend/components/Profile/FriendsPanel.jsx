import React from 'react';
import Friend from './Friend';

class FriendsPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllFriendsById(this.props.profileId)
    }

    componentDidUpdate(prevProps) {
        if(!(this.props.profileId === prevProps.profileId) ) {
            this.props.getAllFriendsById(this.props.profileId)
        }
    }

    render() {
        let friends = [];
        
        let keys = Object.keys(this.props.friends);
        for(let i =0; i< keys.length; i++){
            let curFriend = this.props.friends[keys[i]];
            if(curFriend.user_one_id === this.props.profileId || curFriend.user_two_id === this.props.profileId){
            if(curFriend.status === true) {
                let friendUser;
                if(curFriend.user_one_id === this.props.profileId) {
                    friendUser = curFriend.user_two_id;
                }else {
                    friendUser = curFriend.user_one_id;
                }
                if(curFriend.user_one_id != curFriend.user_two_id) {
                friends.push(<li key={i}><Friend user={this.props.users[friendUser]}/></li>)
                }
            }
        }
        }
        return (
            <div className="profile-friends-panel">
                <div className="profile-friends-panel-header">{`Friends        ${friends.length}`}</div>
                <ul className="friends-panel-list">
                {friends}
                </ul>
            </div>
        )
    }

}

export default FriendsPanel;