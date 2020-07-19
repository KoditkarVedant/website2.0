import React, { useEffect, useState } from 'react'
import BlogList from './containers/BlogList'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import { allBlogs } from './util'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './containers/Home'

allBlogs().then(x => console.log(x))

function App() {
  const [blogs, setBlogs] = useState<any | undefined>([])
  useEffect(() => {
    if (blogs.length === 0) {
      allBlogs().then(setBlogs)
    }
  })

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs">
            <BlogList blogs={blogs} />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
