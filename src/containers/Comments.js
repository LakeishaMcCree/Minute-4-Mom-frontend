import React from 'react' 
import {deleteComment} from '../actions/deleteComment'
import {connect} from 'react-redux'

const Comments = (props) => {

    const handleDelete = (comment) => {
        props.deleteComment(comment.id, comment.post_id)
    }

    const handleUpdate = (comment) => {
        props.handleUpdate(comment.id, comment.post_id)
    }

    return (
        <div className="comment-list">
            {props.comments && props.comments.map(comment => 
                <li key={comment.id}>{comment.name} - {comment.content} <br /> <br />
                <button onClick={() => handleDelete(comment)}>Delete Comment</button><br /><br />
                <button onClick={() => handleUpdate(comment)}>Edit Comment</button><br /><br /></li>
            )}
             <br />
        </div>
    )


}
export default connect(null, {deleteComment}, )(Comments)