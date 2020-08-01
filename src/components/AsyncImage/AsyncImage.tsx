import React, { useState, useRef } from 'react'
import ProgressiveImage from 'react-progressive-image'
import Spiner from '../Spiner'
import { useIntersectionObserver } from './useIntersectionObserver'

interface AsyncImageProps {
    src: string,
    width?: any
}

const AsyncImage = ({ src, ...rest }: AsyncImageProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useIntersectionObserver({
        target: ref,
        onIntesect: ([{ isIntersecting }]: any[], observerElement: any) => {
            if (isIntersecting) {
                setIsVisible(true);
                observerElement.unobserve(ref.current);
            }
        }
    })

    return (
        <div ref={ref}>
            {isVisible && (
                <ProgressiveImage src={src} placeholder="" delay={1000}>
                    {(src: string, loading: boolean) => {
                        return loading
                            ? (
                                <Spiner />
                            ) : (
                                <img src={src} {...rest} />
                            )
                    }}
                </ProgressiveImage>
            )}
        </div>
    )
}

export default AsyncImage
