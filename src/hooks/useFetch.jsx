import { useState } from 'react';

 const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    const request = async (endpoint, options = {}) => {
        setLoading(true);
        setError(null);

        try {

            console.log(options)
            const response = await fetch(`${baseUrl}${endpoint}`, options);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setLoading(false);
            return data;
        } catch (error) {
            setError(error.message);
            setLoading(false);
            throw error;
        }
    };

    return { request, loading, error };
};

export default useFetch;
