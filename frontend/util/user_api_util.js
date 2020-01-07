export const fetchUsersBySearch = search => {
    return $.ajax({
    
    method:"GET",
    url:"api/users",
    data: {search}
})};


export const fetchUserById = id => {
    return $.ajax({
        method: "GET",
        url: `api/user/${id}`
    })
}