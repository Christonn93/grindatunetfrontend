import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://api.cosmicjs.com/v2/buckets/${process.env.COSMIC_BUCKET_SLUG}`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.COSMIC_WRITE_KEY}`,
  },
});

export default axiosInstance;