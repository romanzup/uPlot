import { useState, useCallback } from 'react';
import data from '../bench/data.json';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url: string) => {
    setLoading(true);
    try {
      console.log(url);
      
      // const response = await fetch(url, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Accept: 'application/json',
      //   }
      // });
      // const data = await response.json();
      // if (!response.ok) {
      //   throw new Error(data.message || 'Something went wrong');
      // }

      setLoading(false);

      return data;
    } catch (e: any) {
      setLoading(false);
      setError(e.message);
      throw e;
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};
