import React from 'react' 
import {connect} from 'react-redux'
import {addComment} from '../actions/addComment'

class CommentInput extends React.Component {

    state = {
        name: '',
        content: ''
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addComment(this.state, this.props.post.id)
        this.setState({
            name: '',
            content: ''
        })
    }

    render () {
        return ( 
            <div>
                <h3>Add A New Comment:</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type='text' name="name" value={this.state.name} onChange={this.handleChange}></input><br /><br />
                    <label>Comment:</label>
                    <input type='textarea' name="content" value={this.state.content} onChange={this.handleChange}></input><br /><br />
                    <input type="submit" value="Add New Post"/>
                </form>
            </div>
        
        
        )
    }

}

export default connect(null, {addComment})(CommentInput)