import React from 'react' 
import {connect} from 'react-redux'
import {addPost} from '../actions/addPost'

//form, will have states, so set it up as a class; in order to have a controlled form, we would need to control those values, have local state to control values (or in a Redux store)
class PostInput extends React.Component {   

    state = {
        
        date: '',
        title: '', 
        author: '', 
        mood: '', 
        content: '', 
        likes: ''
        
    } //local state, not redux store
    

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => { //asynchronous
        event.preventDefault();
        this.props.addPost(this.state)
        this.setState({
            date: '',
            title: '', 
            author: '', 
            mood: '', 
            content: '', 
            likes: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Date:</label>
                    <input type='date' placeholder='Date' name="date" value={ this.state.date } onChange={ this.handleChange }/><br /><br />
                    <label>Title of Post:</label>
                    <input type='text' placeholder='Title' name="title" value={ this.state.title } onChange={ this.handleChange }/><br /><br />
                    <label>By:</label>
                    <input type='text' placeholder='Author' name="author" value={ this.state.author } onChange={ this.handleChange }/><br /><br />
                    <label>Mood:</label>
                    <input type='text' placeholder='Mood' name="mood" value={ this.state.mood } onChange={ this.handleChange }/><br /><br />
                    <label>Let Me Clear My Mind...</label>
                    <input type='textarea' placeholder='Content' name="content" value={ this.state.content } onChange={ this.handleChange }/><br /><br />
                    <input type='integer' placeholder="number of likes" name="likes" value={ this.state.likes } onChange={ this.handleChange }/><br /><br />
                    <input type="submit" value="Add New Post" className="btn"/>
                </form>     
            </div>
        )
    }
}

export default connect(null, {addPost})(PostInput)