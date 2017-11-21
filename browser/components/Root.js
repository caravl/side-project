import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Router } from 'react-router' // from react-router3 --> not what we want to use
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
// import other components

class Root extends Component {

    // use componentDidMount() to get state immediately after this component is mounted

    render() {
      return(
        <div>
          <h1>'hi from root'</h1>
          <Navbar />
          {/* <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/users" component={AllUsers} />
              <Route path="/users/:id" component={SingleUser} />
              <Route exact path="/destinations" component={AllDestinations} />
              <Route path="/destinations/:id" component={SingleDestination} />
              <Route exact path="/activities" component={AllActivities} />
              <Route path="/activities/:id" component={SingleActivity} />
              <Route exact path="/suggestions" component={AllSuggestions} />
              <Route path="/suggestions/:id" component={SingleSuggestion} />
            </Switch>
          </Router> */}
          <Footer />
        </div>
      )
    }
  }

module.exports = Root;
// add react bootstrap
// exact path only when component doesn't have nested routes
