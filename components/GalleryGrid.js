export default function GalleryGrid({images}){
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((src,i)=> (
        <div key={i} className="overflow-hidden rounded-lg group">
          <div className="h-40 bg-cover bg-center transform group-hover:scale-105 transition duration-500" style={{backgroundImage:`url(${src})`}} />
        </div>
      ))}
    </div>
  )
}
