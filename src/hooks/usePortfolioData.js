import { useState, useEffect } from 'react';

export const usePortfolioData = () => {
    const [portfolioData, setPortfolioData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPortfolioData = async () => {
            try {
                const response = await fetch('/data/portfolio.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch portfolio data');
                }
                const data = await response.json();
                setPortfolioData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolioData();
    }, []);

    return { portfolioData, loading, error };
};
