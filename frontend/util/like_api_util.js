export const createLike = like => ($.ajax({
    method: "POST",
    url: `api/post/${like.post_id}/like`,
    data: {like}
}))

export const getLikes = post_id => ($.ajax({
    method:"GET",
    url: `api/post/${post_id}/like`
}))

export const destroyLike = id => ($.ajax({
    method: "DELETE",
    url: `api/like/${id}`
}))