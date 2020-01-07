export const createPost = post => ($.ajax({
    method:"POST",
    url: "api/post",
    data: {post}
}));

export const fetchPostById = id => ($.ajax({
    method: "GET",
    url: `/api/post/${id}`
}))

export const fetchUsersPosts = id => ($.ajax({
    method: "GET",
    url: `/api/post/all/${id}`
}))

export const fetchAllPosts = id => ($.ajax({
    method: "GET",
    url: `/api/post/userAll/${id}`
}))

export const deletePost = id => ($.ajax({
    method: "DELETE",
    url: `/api/post/${id}`
}))

export const updatePost = post => ($.ajax({
    method:"PATCH",
    url:`/api/post/${post.id}`,
    data: {post}
}))