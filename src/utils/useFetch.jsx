import { useState, useEffect } from "react";

export function useFetch(url) {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setFetchedData(data);
      } catch (error) {
        console.log("~ getData ~ error:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  return { fetchedData, isLoading, error };
}
