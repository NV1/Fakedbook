import * as APIUtil from '../util/post_api_util';

export const CREATE_POST = "CREATE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

export const receivePost = post => ({
    type: CREATE_POST,
    post
})

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
})

export const deletePost = post => ({
    type: DELETE_POST,
    post
})

export const updatePost = post => ({
    type: UPDATE_POST,
    post
})

export const createPost = post => dispatch => (
    APIUtil.createPost(post).then(post => (
        dispatch(receivePost(post))
    ))
)

export const fetchUserPosts = id => dispatch => (
    APIUtil.fetchUsersPosts(id).then(posts => (
        dispatch(receivePosts(posts))
    ))
)


export const fetchAllPosts = id => dispatch => (
    APIUtil.fetchAllPosts(id).then(posts => (
        dispatch(receivePosts(posts))
    ))
)

export const patchPost = post => dispatch => (
    APIUtil.updatePost(post).then(post => (
        dispatch(updatePost(post))
    ))
)

export const destroyPost = id => dispatch => (
    APIUtil.deletePost(id).then(post => (
        dispatch(deletePost(post))
    ))
)