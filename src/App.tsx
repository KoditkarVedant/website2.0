import React, { useEffect, useState } from 'react'
import BlogList from './containers/BlogList'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './containers/Home'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs" component={BlogList}>
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
