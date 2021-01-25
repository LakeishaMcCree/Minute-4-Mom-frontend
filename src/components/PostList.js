import React from 'react' 
import {Route, Link} from 'react-router-dom'
import PostShow from './PostShow' 

//functional component because it will just going to present a list of posts
const PostList = (props) => {

    return (
        <div>
            {props.posts.map(post => 
            <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li> )}
        </div>

    )

}

//this component is responsible for rendering a list of posts

export default PostList