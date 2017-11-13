import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import Root from './components/Root'
// import other components

class Routes extends Component {
  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:id" component={SingleUser} />
          <Route exact path="/destinations" component={Destinations} />

        </Switch>
      </Router>
    )
  }
}
