import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
        headers:{
            Authorization:'Client-ID MybrZpaB3aPkfIpUvnx3w2zKDwjqysnciHNvnzDVWzo'
        }
})