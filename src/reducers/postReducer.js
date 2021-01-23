
export default function postReducer(state = {posts: []}, action) {
//object with a posts key pointing to an empty array

    switch (action.type) {
        case 'FETCH_POSTS':
            return {posts: action.payload}
        default:
            return state
    }
}


