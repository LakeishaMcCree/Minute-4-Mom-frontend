export const editComment = (commentId, postId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/posts/${postId}/comments/${commentId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentId, postId)
        })
        .then(resp => resp.json())
        .then(post => dispatch({type: 'EDIT_POST', payload: post}))
    }
}