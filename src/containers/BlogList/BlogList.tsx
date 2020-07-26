import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import map from 'lodash/map'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { allBlogs, dateFormatter } from '../../util'
import { IBlog } from '../../util/util.types'
import ReadTime from '../../components/ReadTime'

const Blog = styled.div`
    margin-bottom: 20px;
    font-size: 18px;

    .blog__title {
        font-size: 24px;
        text-decoration: none;
    }

    .blog__link {
        display: flex;
        justify-content: flex-end;
    }

    .blog__metadata {
        display: flex;
        flex-direction: row;
        font-size: 16px;

        & > * {
            margin: 0 8px;
        }

        & > :first-child {
            margin-left: 0;
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
    }
      
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
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
            allBlogs().then(setBlogs)
        }
    }, [blogs, setBlogs])

    return (
        <BlogListWrapper>
            {map(blogs, blog => (
                <Blog key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} className="blog__title">{blog.title}</Link>
                    <p className="blog__metadata">
                        <span className="blog__date">{dateFormatter(blog.date)}</span>
                        <ReadTime className="blog__readTime" minutes={blog.readTime} />
                    </p>
                    <div className="blog__description markdown-body">
                        <ReactMarkdown source={blog.sneakpeek} />
                    </div>
                    <Link to={`/blogs/${blog.id}`} className="blog__link">
                        {'Continue reading >>'}
                    </Link>
                </Blog>
            ))}
        </BlogListWrapper>
    )
}


export default BlogList