
export default (state = {posts: []}, action) => {
//object with a posts key pointing to an empty array
//{posts: []}
    

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
            let post = state.posts.filter(post => post.id !== action.payload)
            return [...post]
        case 'EDIT_POST':
            let updatePost = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload
                } else {
                    return post
                }
            })   
            return {...state, posts: updatePost}          
        case 'DELETE_COMMENT':
                let postscomments = state.posts.map(post => {
                    if (post.id === action.payload.id) {
                        return action.payload
                    } else {
                        return post
                    }
                })
            return {...state, posts: postscomments}   
            
        
        
        default:
            return state
    }
}


