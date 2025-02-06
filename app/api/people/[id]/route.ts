import { NextResponse } from 'next/server';

interface Person {
  name: string;
  gender: string;
  birth_year: string;
  homeworld: string;
}

const fetchPersonData = async (id: string): Promise<Person> => {
  try {
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
  } catch (error) {
    throw new Error('Failed to fetch person data');
  }
};

export async function GET(request: Request, { params }: { params: { id: string } }): Promise<NextResponse> {
  try {
    const { id } = params;

    if (!id) {
      throw new Error('ID is required');
    }

    const personData = await fetchPersonData(id);

    return NextResponse.json(personData);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
