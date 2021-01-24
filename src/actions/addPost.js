export const addPost = (data) => {
    
    return (dispatch) => {
         fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'apllication/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(post => dispatch({
            type: 'ADD_POST', 
            payload: post
        }))
    }

}