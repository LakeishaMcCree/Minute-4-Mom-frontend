import React from 'react' 
import {Redirect} from 'react-router-dom'

const PostShow = (props) => {

    console.log(props) 

    let post = props.posts[props.match.params.id - 1]
    

    return (
        <li>
            {post ? post.title : null} - {post ? post.author : null}
        </li>
    )



}

export default PostShow