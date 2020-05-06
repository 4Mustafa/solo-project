import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
/* import UserPage from '../UserPage/UserPage';
 */import InfoPage from '../InfoPage/InfoPage';
import MainPage from '../searchPage/mainPage';
import searchError from '../searchPage/searchError'
import searchTopic from '../searchPage/searchTopic'
import searchSite from '../searchPage/searchSite'
import topicResult from '../resultsPage/topicResults'
import siteResult from '../resultsPage/siteNameResults'
import errorResult from '../resultsPage/errorResults'
import addPage from '../addPage/addPage'
import allResults from '../resultsPage/allResults'
import editPage from '../editPage/editPage'
import searchWord from '../searchPage/searchWord'
import wordResult from '../resultsPage/wordResults'
import favResult from '../resultsPage/favResults'
import myResults from '../resultsPage/myResults'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={MainPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}

            <ProtectedRoute
              exact
              path="/searchError"
              component={searchError}
            />

            <ProtectedRoute
              exact
              path="/searchTopic"
              component={searchTopic}
            />

            {<ProtectedRoute
              exact
              path="/searchSite"
              component={searchSite}
            />}

            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />

            <ProtectedRoute
              exact
              path="/topicResults"
              component={topicResult}
            />

            <ProtectedRoute
              exact
              path="/siteNameResults"
              component={siteResult}
            />
            <ProtectedRoute
              exact
              path="/errorResults"
              component={errorResult}
            />

            <ProtectedRoute
              exact
              path="/addPage"
              component={addPage}
            />

            <ProtectedRoute
              exact
              path="/allResults"
              component={allResults}
            />
            <ProtectedRoute
              exact
              path="/editPage"
              component={editPage}
            />

            <ProtectedRoute
              exact
              path="/searchWord"
              component={searchWord}
            />

            <ProtectedRoute
              exact
              path="/wordResults"
              component={wordResult}
            />

            <ProtectedRoute
              exact
              path="/favResults"
              component={favResult}
            />

            <ProtectedRoute
              exact
              path="/myResults"
              component={myResults}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect()(App);
