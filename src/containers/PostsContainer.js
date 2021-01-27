import React from 'react' 
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/fetchPosts'
// import PostInput from '../containers/PostNew'
import PostShow from '../containers/PostShow'
import {Link} from 'react-router-dom'

class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }
    render() {
        return (
           
        <div>
            {this.props.posts.map(post => 
            <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li> )}
        </div>

        )
    }

    
        
    

}
//switch 
//to see the list, create a mapStateToProps function

const mapStateToProps = state => {
    return {//returning an object called posts
        posts: state.posts 
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostsContainer)