import React from 'react';
import {Link, withRouter} from 'react-router-dom'

class Friend extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        if(this.props.user === undefined) {
            return (<div></div>)
        }
        return (
                <Link to={`/${this.props.user.id}/profile`}>
                <img src={this.props.user.photoUrl} className="friend-pic" />
                <div className="profile-friends-pic-overlay">
                    {this.props.user.first_name} {this.props.user.last_name}
                </div>
                </Link>
            
        )
    }

}

export default withRouter(Friend);