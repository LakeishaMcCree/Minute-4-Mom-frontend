import React from 'react' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
//import PostItem from '../components/PostItem'

class PostsContainer extends React.Component {


    render() {

        const posts = this.props.posts.map(post => 
            <li key={post.id} post={post}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li> )
       
        return (
           
        <div>
            <h3>Posts List:</h3>
            <ul className="collection">
                { posts }
            </ul>
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