import React from 'react' 
import {deleteComment} from '../actions/deleteComment'
import {connect} from 'react-redux'

const Comments = (props) => {

    const handleDelete = (comment) => {
        props.deleteComment(comment.id, comment.post_id)
    }

    

    return (
        <div className="comment-list">
            {props.comments && props.comments.map(comment => 
                <li key={comment.id}>{comment.name} - {comment.content} <br /> <br />
                <button onClick={() => handleDelete(comment)}>Delete Comment</button><br /><br />
                </li>
            )}
             <br />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
       deleteComment: post => dispatch(deleteComment(post))
   }
}

export default connect(mapDispatchToProps, {deleteComment})(Comments)