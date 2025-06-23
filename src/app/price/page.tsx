

const priceList = [
  {
    title: '建具',
    price: '¥9,999,999〜',
    description: '◾️引き戸や開戸などの扉',
  },
  {
    title: '造作家具',
    price: '¥9,999,999〜',
    description: '◾️収納棚、テレビボード、カップボードなど',
  },
  {
    title: '修理',
    price: '¥9,999,999〜',
    description: '◾️建具や造作家具などの修理、補修',
  }

]
export default function Page() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold inline-block">
        料金表
      </h2>
      {priceList.map((item, index) => (
        <div
          key={index}
          className="border-t border-gray-300 flex flex-col justify-between h-full"
        >
          <div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>{item.title}</span>
              <span>{item.price}</span>
            </div>
            <p className="text-sm mt-2 whitespace-pre-wrap">{item.description}</p>
          </div>

        </div>

      ))}
      <div className="w-full border-b border-gray-400 mb-8" />
    </section>
  )
}
