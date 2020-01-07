import React from 'react';
import {Switch,Route} from 'react-router-dom';
import SignUpContainer from './SignUp/SignUpContainer';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import NavBarContainer from './NavBar/NavBarContainer';
import NewsFeedContainer from './NewsFeed/NewsFeedContainer'
import SearchResultsContainer from './NavBar/SearchResultsContainer';
import FriendsModalContainer from './NavBar/FriendsModal/FriendsModalContainer';
import ProfileContainer from './Profile/ProfileContainer';

const App = () => (
    <div className="app-container">
        <ProtectedRoute path='/' component={NavBarContainer} />
        <ProtectedRoute path='/searchResults' component={SearchResultsContainer} />
        <ProtectedRoute path='/:id/profile' component={ProfileContainer} />
        <ProtectedRoute path='/newsfeed' component={NewsFeedContainer} /> 
        <Switch>
            
            <AuthRoute exact path ='/' component={SignUpContainer} />
        </Switch>
    </div>
);

export default App;