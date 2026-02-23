import Link from 'next/link'

export default function ServiceCard({ title, desc, time, from, img, badge }) {
  return (
    <article className="panel rounded-2xl overflow-hidden h-full flex flex-col">
      <div className="relative h-44 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        {badge && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#f6c66c] text-black">
            {badge}
          </div>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold leading-tight">{title}</h3>
        <p className="text-sm text-[#b9c2cf] mt-2 leading-relaxed">{desc}</p>

        <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-2 gap-3 text-sm">
          <div>
            <div className="text-[#8892a1]">Duration</div>
            <div className="font-medium text-white mt-1">{time}</div>
          </div>
          <div>
            <div className="text-[#8892a1]">Price</div>
            <div className="font-medium text-white mt-1">{from}</div>
          </div>
        </div>

        <div className="mt-5">
          <Link href="/contact" className="btn-primary w-full !rounded-xl !py-2.5">
            Book This Service
          </Link>
        </div>
      </div>
    </article>
  )
}
