import React from 'react' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class PostsContainer extends React.Component {

    render() {

        const post = this.props.posts.map(post => 
            <li key={post.id} post={post}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li> )
        
        return (
           
        <div>
            {post}
        </div>

        )
    }

    
        
    

}
//to see the list, create a mapStateToProps function

const mapStateToProps = state => {
    return {//returning an object called posts
        posts: state.posts 
    }
}



export default connect(mapStateToProps)(PostsContainer)