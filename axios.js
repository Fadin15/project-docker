const axios = require('axios'); // For Node.js, or use import statement in browsers

async function fetchPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    console.log('Fetched Posts:', posts);
    posts.forEach(post => console.log('Post Title:', post.title));

    return posts;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

fetchPosts()
  .then(posts => {
    // Do something with the fetched posts if needed
  })
  .catch(error => {
    console.error('Error in fetchPosts:', error);
  });