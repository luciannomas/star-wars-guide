import { useState, useEffect } from 'react';

interface Person {
  name: string;
  gender: string;
  birth_year: string;
  homeworld: string;
}

const fetchPersonData = async (id: string): Promise<Person> => {
  const personResponse = await fetch(`https://swapi.dev/api/people/${id}/`);
  const personData = await personResponse.json();

  const homeworldUrl = personData.homeworld;
  const homeworldId = homeworldUrl.split('/').filter(Boolean).pop();
  const homeworldResponse = await fetch(`https://swapi.dev/api/planets/${homeworldId}/`);
  const homeworldData = await homeworldResponse.json();

  return {
    name: personData.name,
    gender: personData.gender,
    birth_year: personData.birth_year,
    homeworld: homeworldData.name,
  };
};

const usePeopleData = (ids: string[]) => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const peopleData = await Promise.all(ids.map(id => fetchPersonData(id)));
        setPeople(peopleData);
      } catch (err) {
        setError('Failed to fetch people data');
        console.error('Error fetching people data:', err);
      } finally {
        setLoading(false);
      }
    };

    if (ids.length > 0) {
      fetchData();
    }
  }, [ids]);

  return { people, loading, error };
};

export default usePeopleData;