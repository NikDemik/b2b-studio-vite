import { useState, useEffect } from 'react';

export const useAboutData = () => {
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await fetch('./data/about.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch About data');
                }
                const data = await response.json();
                setAboutData(data);
            } catch (err) {
                console.error('Error loading data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAboutData();
    }, []);

    return { aboutData, loading, error };
};
