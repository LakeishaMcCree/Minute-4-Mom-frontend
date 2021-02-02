import React from 'react' 
import { connect } from 'react-redux'
import CommentsContainer from './CommentsContainer'
import { deletePost } from '../actions/deletePost'
import PostEdit from './PostEdit'


const PostShow =  (props)  => {
   //debugger
   
   const handleDelete = (post) => {
    props.deletePost(post.id)
 }

    let post = props.posts.filter(post => post.id == props.match.params.id)[0]
    //  let paramsId = parseInt(props.match.params.id)
    //  let post = props.posts.find(post => post.id === paramsId)

    return (      
            <div>
                <h2>
                    {post ? post.title : null} - {post ? post.author : null} 
                </h2>
                    <p> Date: {post ? post.date : null} </p>
                    <p>Mood: {post ? post.mood : null}</p>
                    <p>{post ? post.content : null}</p> 
                    <button onClick={() => handleDelete(post.id)}>Remove Post</button>
                    
                    <br /><br /><br />
                    <h4>Comments:</h4>
                    <CommentsContainer post={post}/>  
            </div>

    )
}

const mapStateToProps = state => {
    return {//returning an object called posts
        posts: state.posts 
    }
}

export default connect(mapStateToProps, {deletePost})(PostShow)