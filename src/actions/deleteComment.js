export const deleteComment = (commentId, postId) => {


    return (dispatch) => {
        fetch(`http://localhost:3000/posts/${postId}/comments/${commentId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(post => dispatch({
            type: 'DELETE_COMMENT',
            payload: post
        }))
    }
}
