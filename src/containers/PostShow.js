import React from 'react' 
import { connect } from 'react-redux'
import CommentsContainer from '../components/CommentsContainer'

const PostShow = (props) => {
        
        let paramsId = parseInt(props.match.params.id)
        let post = props.posts.find(post => post.id === paramsId)
        //let post = props.match.params.id;
        
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
const mapStateToProps = state => {
    return {//returning an object called posts
        posts: state.posts 
    }
}

export default connect(mapStateToProps)(PostShow)