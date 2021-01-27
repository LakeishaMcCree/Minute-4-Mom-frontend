export const deletePost = (postId) => {


    return (dispatch) => {
        fetch(`http://localhost:3000/posts/${postId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(post => dispatch({
            type: 'DELETE_POST',
            payload: post.id
        }))
    }
}