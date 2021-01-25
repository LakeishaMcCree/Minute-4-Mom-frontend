import React from 'react' 
import {Route, Link} from 'react-router-dom'
import PostShow from './PostShow' 

//functional component because it will just going to present a list of posts
const PostList = (props) => {

    return (
        <li>
            {props.posts.map(post => 
            <div key={post.id}>
                <Link path={`/posts/${post.id}`}>{post.name}</Link>
            </div> )}
        </li>

    )

}

//this component is responsible for rendering a list of posts

export default PostList