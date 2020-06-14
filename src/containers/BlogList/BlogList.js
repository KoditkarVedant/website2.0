import React from 'react'
import map from 'lodash/map'
import ReactMarkdown from 'react-markdown'

const BlogList = ({ blogs }) => {
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