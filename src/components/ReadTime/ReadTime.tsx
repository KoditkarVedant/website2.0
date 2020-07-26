import React from 'react'

export default function ReadTime({ minutes, ...restProps }: any) {
    return (
        <span {...restProps}>
            {`${Math.ceil(minutes)} min read`}
        </span>
    )
}
