import React from 'react' 
import PostShow from './PostShow' 

//functional component because it will just going to present a list of posts
const PostList = (props) => {

    return (
        <div>
            {props.posts.map(post => 
            <div key={post.id}><PostShow post={post}/></div>)}
        </div>

    )

}

//this component is responsible for rendering a list of posts

export default PostList