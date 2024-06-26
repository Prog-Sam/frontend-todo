import axios from 'axios';

// Our Backend's address
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// For error handling
axios.interceptors.response.use(null, (error) => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        console.error('An unexpected error occured.');
        console.error('Logging the error', error);
    }
    return Promise.reject(error);
});


export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};

//Created a pipeline for every backend calls. We can mutate the request or response here, depending on your choice