const getNewestPost = async () => {
    const url = 'https://basic-blog.teamrabbil.com/api/post-newest';
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
}

export default getNewestPost;