import React from 'react' 
import {Redirect} from 'react-router-dom'

import CommentsContainer from '../containers/CommentsContainer'

const PostShow = (props) => {

    console.log(props) 

    let post = props.posts[props.match.params.id - 1]

    return (
        <div>
            <h2>
                {post ? post.title : null} - {post ? post.author : null} 
            </h2>
            <p> Date: {post ? post.date : null} </p>
            <p>Mood: {post ? post.mood : null}</p>
            <p>{post ? post.content : null}</p> 
            <br /><br></br>

            <h4>Comments:</h4>
            <CommentsContainer post={post}/>
        </div>
    )



}

export default PostShow