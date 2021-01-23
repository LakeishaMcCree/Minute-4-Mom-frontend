import React from 'react' 

//functional component because it will just going to present a list of posts
const PostList = (props) => {

    return (
        <div>
            {props.posts.map(post => <li key={post.id}>{post.title} - {post.author}</li>)}
        </div>

    )

}

//this component is responsible for rendering a list of posts

export default PostList