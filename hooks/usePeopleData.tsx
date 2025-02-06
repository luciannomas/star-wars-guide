import { useState, useEffect } from 'react';
import axios from 'axios';

interface Person {
  name: string;
  gender: string;
  birth_year: string;
  homeworld: string;
}

const usePeopleData = (ids: string[]) => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const peopleData = await Promise.all(
          ids.map(async (id) => {
            const response = await axios.get(`/api/people/${id}`);
            return response.data;
          })
        );
        setPeople(peopleData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ids]);

  return { people, loading, error };
};

export default usePeopleData;