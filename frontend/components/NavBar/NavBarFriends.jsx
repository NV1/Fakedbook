import React from 'react';

class NavBarFriends extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getAllFriends();
        
    }

    handleClick() {
        this.props.toggleFriendsDropdown();
        let keys = Object.keys(this.props.incomingRequests);
        for(let i = 0;i < keys.length; i++){
            this.props.receiveUserById(this.props.incomingRequests[keys[i]].user_one_id)
            this.props.receiveUserById(this.props.incomingRequests[keys[i]].user_two_id)
        
        
        }
    }

    render() {
       
     
        return(
           <div></div>
        )
    }

}

export default NavBarFriends