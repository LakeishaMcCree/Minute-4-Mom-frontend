
export default (state = {posts: []}, action) => {
//object with a posts key pointing to an empty array

    
    switch (action.type) {
        case 'FETCH_POSTS':
            return {posts: action.payload}
        case 'ADD_POST':
            return {...state, posts: [...state.posts, action.payload]}    
        case 'ADD_COMMENT':
            let posts = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload
                } else {
                    return post
                }
            })
            return {...state, posts: posts}
        case 'DELETE_POST':
            let newPost = state.posts.filter(post => post.id !== action.payload)
            return [...newPost]
        // case 'EDIT_POST':
        //     let updatePost = state.posts.map(post => {
        //         if (post.id === action.payload.id) {
        //             return action.payload
        //         } else {
        //             return post
        //         }
        //     })   
        //     return {...state, posts: updatePost}          
        case 'DELETE_COMMENT':
                let postsComments = state.posts.map(post => {
                    if (post.id === action.payload.id) {
                        return action.payload
                    } else {
                        return post
                    }
                })
            return {...state, posts: postsComments}        
        
        default:
            return state
    }
}


