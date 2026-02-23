const layoutClasses = [
  'md:col-span-2 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
]

export default function GalleryGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[190px] gap-4 md:gap-5">
      {images.map((src, index) => (
        <figure
          key={`${src}-${index}`}
          className={`group panel rounded-2xl overflow-hidden relative ${layoutClasses[index % layoutClasses.length]}`}
        >
          <img
            src={src}
            alt={`Detailing finish ${index + 1}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
          <figcaption className="absolute left-4 bottom-3 text-xs uppercase tracking-[0.18em] text-[#f5f7fa]">
            Project {String(index + 1).padStart(2, '0')}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
