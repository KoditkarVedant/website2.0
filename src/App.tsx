import React, { useEffect, useState } from 'react'
import BlogList from './containers/BlogList'
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
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: '760px',
      }}
    >
      <header>
        <ul>
          <li>{'Blogs'}</li>
          <li>{'About'}</li>
        </ul>
      </header>
      <main>
        <BlogList blogs={blogs} />
      </main>
      <footer>
        © {new Date().getFullYear()}, simplified.io
      </footer>
    </div>
  );
}

export default App;
