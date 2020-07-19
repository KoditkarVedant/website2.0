import { IBlog } from './util.types'

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

export const allBlogs = async (): Promise<IBlog[]> => {
    const blogs = context.keys().map(context) as any[]

    let allBlogs: IBlog[] = blogs.map(blog => {
        let data = blog.default
        let lines = data.split('\n')

        let indexes = getMetadataSectionIndexes(lines)
        let metadataLines = lines.slice(indexes[0] + 1, indexes[1])
        let metadata: any = transformToMetadataObject(metadataLines)
        metadata['sneakpeek'] = lines.slice(indexes[1] + 1, indexes[1] + 1 + 3).join('\n')

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

    return metadata;
}
