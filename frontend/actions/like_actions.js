import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const GET_POST_LIKES = "GET_POST_LIKES";
export const DELETE_LIKE = "DELETE_LIKE";


export const deleteLike = id => ({
    type: DELETE_LIKE,
    id
})

export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
})

export const getLikes = likes => ({
    type: GET_POST_LIKES,
    likes
})


export const destroyLike = id => dispatch => (
    APIUtil.destroyLike(id).then(like => (
        dispatch(deleteLike(like.id))
    ))
)

export const createLike = like => dispatch => (
    APIUtil.createLike(like).then(like => (
        dispatch(receiveLike(like))
    ))
)

export const fetchPostLikes = post_id => dispatch => (
    APIUtil.getLikes(post_id).then(likes => (
        dispatch(getLikes(likes))
    ))
)

