import { IBlog } from './util.types'
import format from 'date-fns/format'
import size from 'lodash/size'
import words from 'lodash/words'

const context = require.context('../blogs/', true, /.+\.md$/)

const getMetadataSectionIndexes = (lines: string[]) => {
    return lines.reduce((acc: number[], elem: string, i: number) => {
        if (/^---/.test(elem)) {
            acc.push(i)
        }
        return acc
    }, [])
}

const transformToMetadataObject = (metadataLines: string[]) => {
    let obj: any = {}
    for (let l of metadataLines) {
        let keyValue = l.split(': ').map(x => x.trim())
        obj[keyValue[0]] = keyValue[1]
    }
    return obj
}

const WORDS_PER_MINUTE = 200
const calculateReadTime = (str: string): number => size(words(str, /\w+/g)) / WORDS_PER_MINUTE

export const allBlogs = async (): Promise<IBlog[]> => {
    const blogs = context.keys().map(context) as any[]

    const allBlogs: IBlog[] = blogs.map(blog => {
        const data = blog
        const lines = data.split('\n')

        const indexes = getMetadataSectionIndexes(lines)
        const metadataLines = lines.slice(indexes[0] + 1, indexes[1])
        let metadata: any = transformToMetadataObject(metadataLines)
        metadata['sneakpeek'] = lines.slice(indexes[1] + 1, indexes[1] + 1 + 6).join('\n')
        metadata['readTime'] = calculateReadTime(lines.slice(indexes[1] + 1).join('\n'))

        return metadata
    })

    return allBlogs;
}

export const getBlog = async (id: string): Promise<IBlog | undefined> => {
    const { default: data } = await import(`../blogs/${id}/index.md`)

    let lines = data.split('\n')

    let indexes = getMetadataSectionIndexes(lines)
    let metadataLines = lines.slice(indexes[0] + 1, indexes[1])
    let metadata: any = transformToMetadataObject(metadataLines)
    metadata['data'] = lines.slice(indexes[1] + 1).join('\n')
    metadata['readTime'] = calculateReadTime(lines.slice(indexes[1] + 1).join('\n'))

    return metadata;
}

export const dateFormatter = (date: string) => format(new Date(date), 'MMM dd, yyyy')
