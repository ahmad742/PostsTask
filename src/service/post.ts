import axios from 'axios';
import {PostAPIUrl} from '../Constants';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(PostAPIUrl);
    return response.data;
  } catch (error) {
    console.log('Error --->>>', error);
    throw error;
  }
};
