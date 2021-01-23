import React from 'react' 
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/fetchPosts'
import PostInput from '../components/PostInput'
import PostList from '../components/PostList'


class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>
                <PostInput/>
                <PostList posts={this.props.posts}/>
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

export default connect(mapStateToProps, {fetchPosts})(PostsContainer)