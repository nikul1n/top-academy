import { useEffect, useState } from "react"

const useDataLoading = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        
        fetch(url, { signal: abortController.signal })
            .then((response) => response.json())
            .catch((error) => setError(error))
            .then((data) => {
                setData(data);
                setIsLoading(false);
            });

        return () => {
            abortController.abort();
        }
    }, []);

    return { data, error, isLoading }
}

export default useDataLoading