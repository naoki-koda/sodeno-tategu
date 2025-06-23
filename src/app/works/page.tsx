import Link from 'next/link';


export default function Page() {
  const data = [
    {
      id: 1,
      title: "aaa",
      description: '古くなった玄関引き戸を、最新の断熱',
      slug: 'genkan-hikido'

    }

  ];
  return (
    <section className="max-w-6xl mx-auto p-4 space-y-8">
      <h2 className="text-2xl font-bold">施工事例</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((caseItem) => (
          <div
            key={caseItem.id}
            className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3">{caseItem.title}</h3>
            <p className="text-gray-700">{caseItem.description}</p>
            <Link
              href={`/works/${caseItem.slug}`}
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              詳細を見る →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
