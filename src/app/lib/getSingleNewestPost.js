export default async function getSingleNewestPost(id) {
    const url = `https://basic-blog.teamrabbil.com/api/post-details/${id}`;
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
}