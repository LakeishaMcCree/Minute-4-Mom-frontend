import React from 'react' 

//form, will have states, so set it up as a class; in order to have a controlled form, we would need to control those values, have local state to control values (or in a Redux store)
class PostInput extends React.Component {

    state = {
        title: '', 
        author: '', 
        mood: '', 
        content: ''
    } //local state, not redux store

    handleChange = (event) => {
        this.setState({
            [event.target.title]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label>Title of Post:</label>
                    <input type='text' placeholder='Title' name='title' value={this.state.title} onChange={this.handleChange}/><br /><br />
                    <label>By:</label>
                    <input type='text' placeholder='Author' name='author' value={this.state.author} onChange={this.handleChange}/><br /><br />
                    <label>Mood:</label>
                    <input type='text' placeholder='Mood' name='mood' value={this.state.mood} onChange={this.handleChange}/><br /><br />
                    <label>Let Me Clear My Mind</label>
                    <input type='textarea' placeholder='Content' name='content' value={this.state.content} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default PostInput