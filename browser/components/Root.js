import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Router } from 'react-router' // react-router3
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Root from './components/Root'
import Navbar from './Navbar'
import Footer from './Footer'
// import other components

class Root extends Component {

    // use componentDidMount() to get state immediately after this component is mounted

    render() {
      return(
        <div>
          <Navbar />
          <Router>
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
          </Router>
          <Footer />
        </div>
      )
    }
  }

// add react bootstrap
// exact path only when component doesn't have nested routes
