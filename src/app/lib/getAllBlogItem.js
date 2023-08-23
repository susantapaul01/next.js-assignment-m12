const getAllBlogItem = async () => {
    const url = 'https://basic-blog.teamrabbil.com/api/post-categories';
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
}

export default getAllBlogItem;