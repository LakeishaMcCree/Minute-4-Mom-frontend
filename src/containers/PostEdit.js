import React from 'react' 
import {connect} from 'react-redux' 
import {editPost} from '../actions/editPost'

class PostEdit extends React.Component {
    
    state ={
        date: '',
        title: '', 
        author: '',
        mood: '',
        content: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => { //asynchronous
        event.preventDefault();
        let post = {...this.state, id: this.props.account.id}
        this.props.editPost(post)
        //this.props.history.push(`/posts/${id}`)
        this.setState({
            date: '',
            title: '', 
            author: '',
            mood: '',
            content: ''
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
                    <input type="submit" value="Update Post" className="btn"/>
                </form>     
            </div>
        )
    }
PostEdit = {
    posts: {}
}
    

}

export default connect(null, {editPost})(PostEdit)