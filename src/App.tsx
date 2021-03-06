import React from 'react'
import BlogList from './containers/BlogList'
import Blog from './containers/Blog'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './containers/Home'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs" exact component={BlogList} />
          <Route path="/blogs/:id" component={Blog} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
