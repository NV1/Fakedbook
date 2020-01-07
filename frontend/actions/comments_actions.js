import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const GET_POST_COMMENTS = "GET_POST_COMMENTS";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";


export const deleteComment = id => ({
    type: DELETE_COMMENT,
    id
})

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

export const getPostComments = comments => ({
    type: GET_POST_COMMENTS,
    comments
})

export const updateComment = comment => ({
    type: UPDATE_COMMENT,
    comment
})

export const destroyComment = id => dispatch => (
    APIUtil.destroyComment(id).then(comment => (
        dispatch(deleteComment(comment.id))
    ))
)

export const createComment = comment => dispatch => (
    APIUtil.createComment(comment).then(comment => (
        dispatch(receiveComment(comment))
    ))
)

export const fetchPostComments = post_id => dispatch => (
    APIUtil.getCommentsForPost(post_id).then(comments => (
        dispatch(getPostComments(comments))
    ))
)

export const patchComment = comment => dispatch => (
    APIUtil.updateComment(comment).then(comment => (
        dispatch(updateComment(comment))
    ))
)