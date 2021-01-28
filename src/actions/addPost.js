export const addPost = (post) => {
    
    return (dispatch) => {
         return fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'apllication/json'
            },
            body: JSON.stringify({post:post})
        })
        .then(resp => resp.json())
        .then(post => dispatch({ type: 'ADD_POST', payload: post}))
    }

}