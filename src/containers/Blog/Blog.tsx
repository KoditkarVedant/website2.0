import React, { useEffect, useState } from 'react'
import { getBlog, dateFormatter } from '../../util'
import { IBlog } from '../../util/util.types'
import { useParams } from 'react-router-dom'
import Prism from 'prismjs'
import Markdown from '../../components/Markdown'
import styled from 'styled-components'
import ReadTime from '../../components/ReadTime'
import AsyncImage from '../../components/AsyncImage'
import startsWith from 'lodash/startsWith'
import toLower from 'lodash/toLower'

const BlogWrapper = styled.div`
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
`

const Blog = () => {
    const [blog, setBlog] = useState<IBlog | undefined>()
    const { id } = useParams();

    useEffect(() => {
        if (!blog) {
            getBlog(id).then(setBlog)
        }
    }, [blog, id])

    useEffect(() => {
        Prism.highlightAll()
    })

    if (blog == null) {
        return (
            <p>{'Loading...'}</p>
        )
    }

    const imageRenderer = ({ src, alt, ...rest }: any) => {
        const isExternalImage = startsWith(toLower(src), 'http')
        const imageSrc = isExternalImage ? src : require(`../../blogs/${id}/${src}`) // this sucks

        return (
            <AsyncImage src={imageSrc} alt={alt} />
        )
    }

    return (
        <BlogWrapper>
            <h1>{blog.title}</h1>
            <p className="blog__metadata">
                <span className="blog__date">{dateFormatter(blog.date)}</span>
                <ReadTime className="blog__readTime" minutes={blog.readTime} />
            </p>
            <Markdown source={blog.data} className="markdown-body" renderers={{ image: imageRenderer }} />
        </BlogWrapper>
    )
}

export default Blog