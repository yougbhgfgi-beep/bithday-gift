import { useState } from 'react';
import { X, ImagePlus } from 'lucide-react';

const PLACEHOLDER_IMAGES = [
  { src: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'لحظة جميلة 🌸' },
  { src: 'https://images.pexels.com/photos/3760611/pexels-photo-3760611.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'ذكرى لا تُنسى 💕' },
  { src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'أجمل اللحظات ✨' },
  { src: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'ذكريات الربيع 🌺' },
  { src: 'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'لمسة من الجمال 💖' },
  { src: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'يوم لا يُنسى 🎀' },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<typeof PLACEHOLDER_IMAGES[0] | null>(null);

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-pink-600 mb-3">معرض الصور 📸</h2>
          <p className="text-pink-400 text-lg">أجمل اللحظات المعبّرة</p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-pink-300" />
            <span className="text-pink-400 text-xl">🌸</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-pink-300" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {PLACEHOLDER_IMAGES.map((img, i) => (
            <div key={i} className="gallery-item rounded-2xl overflow-hidden shadow-lg cursor-pointer relative group"
              onClick={() => setSelected(img)}>
              <img src={img.src} alt={img.label}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <p className="text-white font-bold text-sm">{img.label}</p>
              </div>
              {/* Overlay shimmer */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">💕</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 glass-card rounded-2xl px-6 py-4 text-pink-500">
            <ImagePlus size={20} />
            <p className="font-medium">يمكنكِ استبدال هذه الصور بصورك الخاصة 📸</p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)' }}
          onClick={() => setSelected(null)}>
          <div className="relative max-w-2xl w-full animate-fade-in-scale" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg z-10 hover:bg-pink-50 transition-colors">
              <X size={20} className="text-pink-500" />
            </button>
            <img src={selected.src} alt={selected.label} className="w-full rounded-3xl shadow-2xl object-cover max-h-[70vh]" />
            <p className="text-white text-center mt-4 font-bold text-lg">{selected.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}
