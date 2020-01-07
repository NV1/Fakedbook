export const newFriendRequest = friend => ($.ajax({
    method:"post",
    url: "api/friends",
    data: {friend}
}))

export const getFriendsById = id => ($.ajax({
    method:"GET",
    url:   `api/friends/${id}`
}))

export const updateFriendRequest = friend => ($.ajax({
    method: "patch",
    url: `api/friends/${friend.id}`,
}))

export const deleteFriend = friend => ($.ajax({
    method: "delete",
    url: `api/friends/${friend.id}`
}))

export const getFriends = () => ($.ajax({
    method:"get",
    url: "api/friends",

}))