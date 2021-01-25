
export default function postReducer(state = {posts: []}, action) {
//object with a posts key pointing to an empty array
debugger;
    switch (action.type) {
        case 'FETCH_POSTS':
            return {posts: action.payload}
        case 'ADD_POST':
            return {...state, posts: [...state.posts, action.payload]}    
        case 'ADD_COMMENT':
            return {}
            default:
            return state
    }
}


