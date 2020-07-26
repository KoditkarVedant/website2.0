import React, { useEffect, useState } from 'react'
import { getBlog } from '../../util'
import { IBlog } from '../../util/util.types'
import { useParams } from 'react-router-dom'
import Prism from 'prismjs'
import Markdown from '../../components/Markdown'

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

    return (
        <Markdown source={blog.data} className="markdown-body" />
    )
}

export default Blog