export const selectFriendPostsOnly = state => {
    let returnPosts = {};
    let friends = state.entities.friends;
    let posts = state.entities.posts;
    let friendsKeys = Object.keys(friends);
    let postsKeys = Object.keys(posts);
    for(let i = 0; i < postsKeys.length; i++){
        let curPost = posts[postsKeys[i]];
        if(curPost.author_id === curPost.profile_id) {
            returnPosts[curPost.id] = curPost;
        } else {
        for(let j = 0 ;j < friendsKeys.length; j++){
            let curFriend = friends[friendsKeys[j]];
            if( curFriend.user_one_id === curPost.author_id 
                && curFriend.user_two_id === curPost.profile_id
                 && curFriend.status === true) {
                    returnPosts[curPost.id] = curPost;
                }
                if( curFriend.user_two_id === curPost.author_id 
                    && curFriend.user_one_id === curPost.profile_id
                     && curFriend.status === true) {
                        returnPosts[curPost.id] = curPost;
                    }
        }
    }
    
    }
    return returnPosts;
}