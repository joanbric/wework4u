
/** @type {import('./$types').PageLoad} */
export async function load({params}){

    const post = await import(`../../../lib/company-projects/${params.name}/page.svx`)
    const {title, time} = post.metadata;
    const Content = post.default;




    return {
        Content,
        title,
        time
    }
}