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
            
            <CommentsContainer post={post}/>
        </div>
    )



}

export default PostShow