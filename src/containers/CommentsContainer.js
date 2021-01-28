import React from 'react' 
import CommentNew from './CommentNew'
import Comments from './Comments'

class CommentsContainer extends React.Component {

  
    render() {
        return (
            <div>
                <Comments comments={this.props.post && this.props.post.comments}/><br /><br />
                <CommentNew post={this.props.post}/>
            </div>
            
        )
    }
   
}

export default CommentsContainer

