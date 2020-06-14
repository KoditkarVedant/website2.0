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
        let keyValue = l.split(': ')
        obj[keyValue[0]] = keyValue[1]
    }
    return obj
}

export const allBlogs = async (): Promise<string[]> => {
    const blogs = context.keys().map(context) as any[]

    let allBlogs: any[] = blogs.map(blog => {
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