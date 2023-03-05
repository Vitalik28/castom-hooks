import { useEffect, useState } from 'react';
import { ITodo } from '../models/models';

export default function (request: () => any) {
  const [data, setData] = useState<ITodo[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    request()
      .then((response: any) => setData(response.data))
      .catch((error: any) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);
  

  return [data, error, loading];
}
