export const deleteComment = (postId, commentId) => {


    return (dispatch) => {
        fetch(`http://localhost:3000/posts/${postId}/comments/${commentId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(post => dispatch({
            type: 'DELETE_COMMENT',
            payload: post
        }))
    }
}
