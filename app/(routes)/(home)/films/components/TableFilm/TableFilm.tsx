'use client';


export default function TableFilm({ people }: any) {
    console.log('People:', people);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Tabla people</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
}
