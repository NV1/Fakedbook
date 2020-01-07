import React from 'react';

function FriendsModalComponent(props) {
    let friend = {
                id: props.friendId,    
                user_one_id:props.currentUser, 
                user_two_id: props.sender.id,
            status:true}
    return (
        <div className="friends-modal-component"  > 
            <li className="friends-modal-list-el" > 
            <div className="profile-pic"><img className="profile-pic" src={props.sender.photoUrl}></img></div>
            {props.sender.first_name} {props.sender.last_name} 
                <div><button 
                onClick = {() => props.updateFriend(friend)}
                className="friend-request-button accept-request">Confirm</button>
                <button
                onClick={() => props.deleteFriend(friend)}
                className="friend-request-button">Deny</button>
                </div>
            </li>
        </div>
    )
}

export default FriendsModalComponent;