import axios from 'axios';
import { baseUrl } from '../baseUrl';

/// UserInfo function to fetch data from an API
export const fetchUserData = async () => {
    try {
        /// Making a GET request to the API endpoint
        const response = await axios.get(`${baseUrl}?size=40`);

        /// Return the response data
        return response.data;

    } catch (error) {
        /// Handling errors 
        console.error('Error fetching user info:', error);

        throw error; /// Rethrow the error if any
    }
};
