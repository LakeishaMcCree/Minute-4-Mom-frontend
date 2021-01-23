import React from 'react' 
import PostInput from '../components/PostInput'
import PostList from '../components/PostList'

class PostsContainer extends React.Component {
    render() {
        return (
            <div>
                <PostList/>
                <PostInput/>
            </div>
        )
    }
        
    

}

export default PostsContainer