export const editPost = (data) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/posts/${data.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(post => dispatch({type: 'EDIT_POST', payload: post}))
    }
}