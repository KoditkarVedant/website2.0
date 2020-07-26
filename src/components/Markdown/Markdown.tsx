import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const MarkdownWrapper = styled.div`
    color: #dfdfdf;
    width: 100%;
    margin: auto;
    line-height: 160%;

    pre {
        background: #111;
    }

    blockquote {
        margin: 0 auto;
        padding: 1em;
        border-left: 5px solid #a6dcef;
        background-color: rgb(166, 220, 239, 0.2);
    }

    td, th {
        border: 1px solid #ddd;
        padding: 8px;
    }
    
    tr:hover {
        background-color: #ddd;
        color: #1f1f1f;
    }
    
    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
    }

    code:not([class*="language-"]) {
        padding: 0 5px;
        background-color: rgb(166, 220, 239, 0.2);
    }
    
    img {
        max-width: 100%
    }
`

export default function Markdown(props: ReactMarkdown.ReactMarkdownProps) {
    return (
        <MarkdownWrapper>
            <ReactMarkdown {...props} />
        </MarkdownWrapper>
    )
}