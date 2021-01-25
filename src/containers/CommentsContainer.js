import React from 'react' 
import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'

class CommentsContainer extends React.Component {


    render() {
        return (
            <div>
                <CommentInput/>
                <Comments comments={this.props.post && this.props.post.comments}/>
            </div>

        )
    }

}

export default CommentsContainer