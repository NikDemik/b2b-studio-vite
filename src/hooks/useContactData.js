import { useState, useEffect } from 'react';

export const useContactData = () => {
    const [contactData, setContactData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContactData = async () => {
            try {
                const response = await fetch('./data/contacts.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch contact data');
                }
                const data = await response.json();
                setContactData(data);
            } catch (err) {
                console.error('Error loading data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContactData();
    }, []);

    return { contactData, loading, error };
};
