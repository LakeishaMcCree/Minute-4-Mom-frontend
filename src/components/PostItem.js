import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/deletePost'

const PostItem = ({ post, deletePost }) => {
    return (
    <li className="collection-item">
      Date: {post.date}
      Title: {post.title}<br />
      Author: { post.author } <br />
      Mood: { post.mood } <br />
      Content: { post.content } <br />
      <button onClick={()=>deletePost(post.id)}>Remove Post?</button>
    </li>
    );
}


export default connect(null, { deletePost })(PostItem)