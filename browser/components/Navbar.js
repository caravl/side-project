import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'

export default class Navbar extends Component {

  render() {
    return(
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/destinations">WanderLove</Link>
        </div>
        <ul className="navbar-list">
          <Link to="/users">Wanderers</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/suggestions">Suggestions</Link>
        </ul>
      </div>
    )
  }
}
