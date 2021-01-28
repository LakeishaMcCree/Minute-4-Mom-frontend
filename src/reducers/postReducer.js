import { createStore, applyMiddleware, compose} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {
    posts: [
        {id: '', date: '', title: '', author: '', mood: '', content: ''}
    ]
}

const postReducer = (state = initialState, action) => {
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
            case 'DELETE_COMMENT':
                let postComments = state.filter(post => post.id !== action.payload)
                return [...postComments]
            //     let postscomments = state.posts.map(post => {
            //         if (post.id === action.payload.id) {
            //             return action.payload
            //         } else {
            //             return post
            //         }
            //     })
            // return {...state, posts: postscomments}    
        
        default:
            return state
    }
}

export default createStore (postReducer, composeWithDevTools(applyMiddleware(thunk)))
