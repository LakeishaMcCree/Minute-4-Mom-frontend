import React from 'react' 
import CommentsContainer from './CommentsContainer'
import {connect} from 'react-redux'
import {deletePost} from '../actions/deletePost'
//import PostEdit from './PostEdit'



const PostShow = (props) => {
  
    //let post = props.posts.filter(post => post.id === props.match.params.id)
    let paramsId = parseInt(props.match.params.id)
    let post = props.posts.find(post => post.id === paramsId);
    
        const handleDelete = (post) => {
            props.deletePost(post.id)
        }
          
      
    return (      
            <div>
                <h2>
                    {post ? post.title : null} - {post ? post.author : null} </h2>
                   <p> Date: {post ? post.date : null} </p>
                   <p>Mood: {post ? post.mood : null}</p>
                     <p>{post ? post.content : null}</p> 
                     <button onClick={() => handleDelete(post)}>Delete Post</button><br /><br />
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

export default connect(mapStateToProps, { deletePost })(PostShow)