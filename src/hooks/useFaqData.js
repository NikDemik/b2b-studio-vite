import { useState, useEffect } from 'react';

export const useFaqData = () => {
    const [faqData, setFaqData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFaqData = async () => {
            try {
                // Добавляем timestamp для избежания кэширования
                const response = await fetch('./data/faq.json?t=' + Date.now());

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setFaqData(data);
            } catch (err) {
                console.error('Error loading FAQ data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFaqData();
    }, []);

    return { faqData, loading, error };
};
