export const createComment = comment => ($.ajax({
    method: "POST",
    url: `api/post/${comment.post_id}/comment`,
    data: {comment}
}))

export const getCommentsForPost = post_id => ($.ajax({
    method:"GET",
    url: `api/post/${post_id}/comment`
}))

export const destroyComment = id => ($.ajax({
    method: "DELETE",
    url: `api/comment/${id}`
}))

export const updateComment = comment => ($.ajax({
    method:"PATCH",
    url: `api/comment/${comment.id}`,
    data: {comment}
}))