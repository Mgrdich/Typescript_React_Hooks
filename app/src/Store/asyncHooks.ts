import {useState} from 'react';

export const useAsyncActions = (action: any) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const performAction = async (body = null) => {
        try {
            setLoading(true);
            setData(null);
            setError(null);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };
    return [{loading, data, error}, performAction];
};

