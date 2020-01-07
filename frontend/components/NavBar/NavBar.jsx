import React from 'react';
import {withRouter} from 'react-router-dom'
import SettingsDropDown from './SettingsDropDown';
import SearchBar from './SearchBar';
import NavBarFriends from './NavBarFriends';
import FriendsModalComponent from './FriendsModal/FriendsModalComponent'

class NavBar extends React.Component {

    constructor(props) {
        super(props);   
        this.container = React.createRef(); 
        this.container2 = React.createRef();
        this.state = {
            friendsDrop: false,
            settingsDrop: false,
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.clickName = this.clickName.bind(this);
        this.handleFriendsButtonClick = this.handleFriendsButtonClick.bind(this);
        this.handleSettingsButtonClick = this.handleSettingsButtonClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        this.props.getAllFriends();
        document.addEventListener("click", this.handleClickOutside);
        
    }

    handleClickOutside(event) {
       
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            friendsDrop: false,
          });
        }
        if (this.container2.current && !this.container2.current.contains(event.target)) {
            this.setState({
              settingsDrop: false,
            });
          }
      
      }

    componentWillUnmount () {
        document.removeEventListener("mousedown", this.handleClickOutside); 
    }

      
    handleFriendsButtonClick() {
        this.setState({
            friendsDrop: !this.state.friendsDrop
        });
        let keys = Object.keys(this.props.incomingRequests);
        for(let i = 0;i < keys.length; i++){
            this.props.receiveUserById(this.props.incomingRequests[keys[i]].user_one_id)
            this.props.receiveUserById(this.props.incomingRequests[keys[i]].user_two_id)
        
        
        }
        
    }

    handleSettingsButtonClick() {
        this.setState({
            settingsDrop: !this.state.settingsDrop,
        })
    }


    handleLogout(){
        this.props.logout();
        let path = '/';
        this.props.history.push(path);
    }

    clickName() {
        this.props.history.push(`/${this.props.user.id}/profile`);
    }

    
        
    render() {
        let photo;
        if(this.props.user.photoUrl) {
            photo = this.props.user.photoUrl;
        } else {
            return null;
        }
        let notification;
        if (Object.keys(this.props.incomingRequests).length > 0){
            notification = <i className="nav-friends-button-icon-notification">{Object.keys(this.props.incomingRequests).length}</i>
        } else {
            notification = <i></i>
        }
        let requests = []
        let keys = Object.keys(this.props.incomingRequests);
        if(Object.keys(this.props.users).length > 0) {
            for(let i = 0; i < keys.length; i++){
                if(this.props.users[this.props.incomingRequests[keys[i]].user_two_id] != undefined &&
                    this.props.users[this.props.incomingRequests[keys[i]].user_one_id] != undefined) {
                    requests.push(<FriendsModalComponent 
                        key={this.props.incomingRequests[keys[i]].id}
                        updateFriend = {this.props.updateFriend}
                        friendId = {this.props.incomingRequests[keys[i]].id}
                        currentUser = {this.props.currentUser}
                        deleteFriend = {this.props.deleteFriend}
                        sender={this.props.users[this.props.incomingRequests[keys[i]].user_one_id]}
                        />)
                    }
                }
        }
        if(requests.length === 0) {
            requests = [<div key={0} className="no-requests-notification">No pending requests.</div>]
        }
        return (
            <div className="main-nav-bar" >
                <div className="main-nav-bar-content">
                    <div className="main-nav-bar-content-left">
                        <div className="logo-button" onClick = {() => {window.location.hash='/newsfeed'}}></div>
                        
                        <SearchBar fetchUsers={this.props.fetchUsers}/>
                       
                    </div>

                    <div className="main-nav-bar-content-mid">
                        <div className="main-nav-bar-user" onClick={() => this.clickName()}>
                            <div className="main-nav-bar-user-profile-pic" ><img className="main-nav-bar-user-profile-pic-pic" src={photo}></img></div>
                            <div className="main-nav-bar-user-name">{this.props.user.first_name}</div>
                        </div>
                        <div className="main-nav-bar-links">
                            <button className="home-button">Home</button>
                            <button className="friends-button" >Find Friends</button>
                        </div>{this.state.editDrop && <div className="post-dropdown">
                    <ul>
                    <li className="post-dropdown-li"
                    onClick={this.deletePost}>Remove Post</li>
                    <li className="post-dropdown-li"
                    onClick={this.editPost}>Edit Post</li>
                    </ul>
                </div>}

                        <div className="main-nav-bar-icons" >
                        <div className="friends-container">
                        <button className="nav-friends-button" ref = {this.container} onClick={this.handleFriendsButtonClick}  >
                            
                            <i className="nav-friends-button-icon"></i>
                            
                            {notification}
                            
                        </button>
                        <div className="friends-content">
                        {this.state.friendsDrop && requests}
                        </div>
                        </div>
                             <button className="nav-message-button" >
                                <i className="nav-message-button-icon"></i>
                            </button>
                            <button className="nav-notification-button" >
                                <i className="nav-notification-button-icon"></i>
                            </button>
                            <button className="nav-help-button" >
                                <i className="nav-help-button-icon"></i>
                            </button>
                            
                            <button id="nav-modal-button" ref={this.container2}    className="nav-drop-down-button" onClick={this.handleSettingsButtonClick}>
                                <i className="nav-drop-down-button-icon"></i>
                            </button>
                            
                            <div  className="settings-modal-container"
                          
                               onClick={() => this.props.toggleDropDown()}>
                            {this.state.settingsDrop && 
                                <div className="settings-modal" >
                                    <ul className="settings-modal-list" onClick={() => this.handleLogout()}>
                                    <div className="settings-modal-component"   > 
                                        <li onClick={() => this.handleLogout()} >Log out</li>
                                    </div>
                                    </ul>
                               
                            </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(NavBar);