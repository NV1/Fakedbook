export const selectIncomingRequestsFromState = state => {
    let allFriends = state.entities.friends;
    let incomingRequests = {};
    let keys = Object.keys(allFriends);
    for(let i = 0;i < keys.length; i++){
        if(allFriends[keys[i]].user_two_id === state.session.id && allFriends[keys[i]].status === false) {
            incomingRequests[keys[i]] = allFriends[keys[i]];
        }
    }

    return incomingRequests;
}