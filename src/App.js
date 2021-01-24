import React from 'react'
import {connect} from 'react-redux'
import PostsContainer from './containers/PostsContainer'

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <PostsContainer/>

      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts
//   }
// }

export default App;
