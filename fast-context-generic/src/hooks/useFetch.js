import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState('');
  const [requestStatus, setRequestStatus] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    setRequestStatus('loading');

    fetch(url, { signal: controller.signal })
      .then(setData)
      .catch((error) => { setError(error); setRequestStatus('failed') })
      .finally(() => setRequestStatus('successful'));

      return () => { controller.abort() };
  }, [url]);

  return { data, requestStatus, error };
}