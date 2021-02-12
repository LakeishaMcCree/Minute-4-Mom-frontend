import React from 'react' 

    
class LikeButton extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            likes: 0
        }
    }

    incrementMe = () => {
        let newCount = this.state.likes + 1
                this.setState({
                    likes: newCount
        })
    }
    
    render() {
        return (  
            <div>
                <button onClick={this.incrementMe} id= {this.props.postId}>Likes: {this.state.likes} </button>
            </div>
        )
    }

}

export default LikeButton

