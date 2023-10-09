
/** @type {import('./$types').PageLoad} */
export async function load({fetch}){
    const response = await fetch(`/api/posts`)
    const posts = await response.json();

    const threeLastPosts = posts.slice(-3)
    
    return {
        posts: threeLastPosts
    }
}