import React from 'react' 
import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'

class CommentsContainer extends React.Component {


    render() {
        return (
            <div>
                <Comments comments={this.props.post && this.props.post.comments}/><br /><br />
                <CommentInput post={this.props.post}/>
            </div>

        )
    }

}

export default CommentsContainer