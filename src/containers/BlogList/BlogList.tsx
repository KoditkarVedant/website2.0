import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import map from 'lodash/map'
import ReactMarkdown from 'react-markdown'
import { allBlogs, IBlog } from '../../util'

const Blog = styled.div`
    & > .Blog__title {
        font-size: 28px;
    }

    & > .Blog__date {
        font-size: 16px;
    }

    & > .Blog__description {
        font-size: 18px;
    }
`

const BlogListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`


const BlogList = () => {
    const [blogs, setBlogs] = useState<IBlog[]>([])

    useEffect(() => {
        if (blogs.length === 0) {
            console.log('loading')
            allBlogs().then(setBlogs)
        }
    })

    return (
        <BlogListWrapper>
            {map(blogs, blog => (
                <Blog key={blog.id}>
                    <p className="Blog__title">{blog.title}</p>
                    <p className="Blog__date">{blog.date}</p>
                    <div className="markdown-body">
                        <ReactMarkdown source={blog.sneakpeek} />
                    </div>
                </Blog>
            ))}
        </BlogListWrapper>
    )
}


export default BlogList