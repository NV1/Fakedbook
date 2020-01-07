import React from 'react';
import SearchResult from './SearchResult';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let results = [];
        let keys = Object.keys(this.props.res);
        for (let i =keys.length-1; i>=0; i--){
            if(keys[i] != this.props.current_user_id) {
                results.push(<SearchResult key={this.props.res[keys[i]]} friends={this.props.friends} updateFriend={this.props.updateFriendRequest} 
                    deleteFriend={this.props.deleteFriendRequest} user={this.props.res[keys[i]]} newFriend={this.props.newFriend} current_user_id={this.props.current_user_id}/> )
                }
                
            }
            
        if(this.props.res[0] === "No users found" ) {
            results = [<li className="search-res-list-el">No users found</li>]
        }

        if(results.length === 0 && Object.keys(this.props.res).length===1) {
            results = [<li className="search-res-list-el">No users found</li>]
        }
        return(
            <div className="main-content-container">
            <ul className="search-res-list">
                {results}
             </ul>
             </div>
        )
        
    }

}

export default SearchResults