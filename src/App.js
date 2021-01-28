import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import PostNew from './containers/PostNew'
import NavBar from './components/NavBar'
import PostsContainer from './containers/PostsContainer'
import PostShow from './containers/PostShow'
import {connect} from 'react-redux'
import {fetchPosts} from './actions/fetchPosts'

class App extends Component {
  
    componentDidMount() {
      this.props.fetchPosts()
    } 

  render() {
    return (
      <Router>
      <NavBar /><br /> 
        <Switch>  
          <div className="App">
            <Route exact path='/' component={Home} />  
            <Route exact path='/posts/new' component={PostNew}/>
            <Route exact path='/posts/:id' component={PostShow}/>
            <Route exact path='/posts'  component={PostsContainer} />
          </div>
        </Switch>
      </Router>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts
//   }
// }

export default connect(null, {fetchPosts})(App)
