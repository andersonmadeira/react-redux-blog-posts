import axios from 'axios'

const jsonPlaceholderBaseUrl = 'https://jsonplaceholder.typicode.com'

export const fetchPosts = () => axios.get(`${jsonPlaceholderBaseUrl}/posts`)
