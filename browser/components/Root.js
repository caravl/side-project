import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import AllDestinations from './AllDestinations'

export default class Root extends Component {

    render() {
      return(
        <Router>
          <div>
            <Navbar />
            <Switch>
            <Route exact path="/destinations" component={AllDestinations} />
          {/*
            <Switch>

              <Route exact path="/users" component={AllUsers} />
              <Route path="/users/:id" component={SingleUser} />
              <Route exact path="/destinations" component={AllDestinations} />
              <Route path="/destinations/:id" component={SingleDestination} />
              <Route exact path="/activities" component={AllActivities} />
              <Route path="/activities/:id" component={SingleActivity} />
              <Route exact path="/suggestions" component={AllSuggestions} />
              <Route path="/suggestions/:id" component={SingleSuggestion} />
              {/* <Footer />
            </Switch>
            */}
          </Switch>
          </div>
        </Router>
      )
    }
  }

// add react bootstrap
// exact path only when component doesn't have nested routes

// import { Router } from 'react-router' // from react-router3 --> not what we want to use
