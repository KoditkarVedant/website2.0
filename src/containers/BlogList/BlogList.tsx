import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import map from 'lodash/map'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { allBlogs } from '../../util'
import {IBlog} from '../../util/util.types'
import format from 'date-fns/format'

const Blog = styled.div`
    margin-bottom: 20px;
    font-size: 16px;

    .blog__title {
        font-size: 24px;
        text-decoration: none;
    }

    .blog__link {
        display: flex;
        justify-content: flex-end;
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
const _dateFormatter = (date: string) => format(new Date(date), 'MMM dd, yyyy')

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
                    <p className="blog__date">{_dateFormatter(blog.date)}</p>
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