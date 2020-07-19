import React, { useEffect, useState } from 'react'
import BlogList from './containers/BlogList'
import Header from './components/Header'
import './App.css';
import { allBlogs } from './util'

allBlogs().then(x => console.log(x))

function App() {
  const [blogs, setBlogs] = useState<any | undefined>([])
  useEffect(() => {
    if (blogs.length === 0) {
      allBlogs().then(setBlogs)
    }
  })

  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>
            Hi there 👋, I'm Vedant [😄 Pronouns: vai-daant]
          </h1>
          <div>
            <a href="https://github.com/KoditkarVedant" target="_blank">
              <img src="https://img.shields.io/github/followers/KoditkarVedant?label=Follow%20%40KoditkarVedant&style=for-the-badge"/>
            </a>
            <a href="https://twitter.com/vedantkoditkar" target="_blank">
              <img src="https://img.shields.io/twitter/follow/vedantkoditkar?style=for-the-badge"/>
            </a>
          </div>
        </section>
      </main>
      <footer>
        © {new Date().getFullYear()}, simplified.io
      </footer>
    </div>
  );
}

export default App;
