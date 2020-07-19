import React, { useEffect, useState } from 'react'
import map from 'lodash/map'
import ReactMarkdown from 'react-markdown'
import { allBlogs, IBlog } from '../../util'

const BlogList = () => {
    const [blogs, setBlogs] = useState<IBlog[]>([])

    useEffect(() => {
        if (blogs.length === 0) {
            console.log('loading')
            allBlogs().then(setBlogs)
        }
    })

    return (
        <>
            {map(blogs, blog => (
                <div key={blog.id}>
                    <div>{blog.title}</div>
                    <div>{blog.date}</div>
                    <div>{blog.description}</div>
                    <div className="markdown-body">
                        <ReactMarkdown source={blog.sneakpeek} />
                    </div>
                </div>
            ))}
        </>
    )
}


export default BlogList