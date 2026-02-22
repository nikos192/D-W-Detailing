import Link from 'next/link'

export default function ServiceCard({title, desc, time, img}){
  return (
    <div className="bg-gradient-to-b from-black/60 to-black/40 glass rounded-xl overflow-hidden shadow-lg">
      <div className="h-40 bg-cover bg-center" style={{backgroundImage:`url(${img})`}} />
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-300 mt-2">{desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-400">{time}</span>
          <Link href="/contact" className="px-3 py-1 bg-accent text-white rounded font-medium hover:opacity-90 transition-opacity">Book</Link>
        </div>
      </div>
    </div>
  )
}
