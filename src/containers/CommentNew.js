import React from 'react' 
import {connect} from 'react-redux'
import {addComment} from '../actions/addComment'

class CommentNew extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            content: ''  
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
        
    


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addComment(this.state, this.props.post.id)
        //this.props.history.push(`/posts/${postId}/comments`)
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
                    <input type="submit" value="Add New Comment"/>
                </form>
            </div>
        
        
        )
    }

}



export default connect(null, {addComment})(CommentNew)