export const fetchMarkdownPosts = async () => {
    const allPorjectsFiles = import.meta.glob('$lib/company-projects/**/*.svx')
    const iterablePostFiles = Object.entries(allPorjectsFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const {metadata} = await resolver()
            // const lastSlash = path.split("/").pop()
            // const postPath = `projects/${lastSlash.split('.')[0]}`;
            
            
            const projectPath = path.split('/')[4]
            const postPath = `projects/${projectPath}`;

            const cover = (await import(`../company-projects/${projectPath}/1.jpg`)).default

            

            return{
                cover,
                meta: metadata,
                path: postPath
            }
        })
    )

    return allPosts
}