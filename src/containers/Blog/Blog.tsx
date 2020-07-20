import React, { useEffect, useState } from 'react'
import { getBlog } from '../../util'
import {IBlog} from '../../util/util.types'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-okaidia.css';

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
        <ReactMarkdown source={blog.data} />
    )
}

export default Blog