import {useState} from 'react';

//this file is not included in the project due to not ableing to include and trigger performAction function normally
export const useAsyncActions = (action: any) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const performAction = async () => {
        try {
            setLoading(true);
            setData(null);
            setError(null);
            const data = await action();
            setData(data);

        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };
    return [{loading, data, error}, performAction];
};

