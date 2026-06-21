import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function MagicSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-20 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-black text-pink-600 mb-3">رسالة خاصة لك 💌</h2>
        <p className="text-pink-400 mb-10 text-lg">اضغط على الزر لتكتشف ما بداخله</p>

        <button onClick={() => setOpen(true)}
          className="group relative px-12 py-5 rounded-full font-bold text-2xl text-white transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-glow"
          style={{ background: 'linear-gradient(135deg, #ff69b4, #ff1493, #c2185b)' }}>
          <span className="flex items-center gap-3">
            <Sparkles size={26} className="group-hover:rotate-12 transition-transform" />
            اضغط هنا 💖
            <Sparkles size={26} className="group-hover:-rotate-12 transition-transform" />
          </span>
        </button>

        {open && (
          <div className="mt-10 animate-fade-in-up">
            {/* Envelope */}
            <div className="relative mx-auto max-w-md">
              {/* Envelope top flap */}
              <div className="relative overflow-hidden rounded-t-2xl h-28"
                style={{
                  background: 'linear-gradient(145deg, #ffb6c1, #ff69b4)',
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl animate-heartbeat">💌</span>
                </div>
              </div>

              {/* Letter body */}
              <div className="bg-white rounded-b-2xl shadow-xl p-8 text-right border border-pink-200/60"
                style={{ boxShadow: '0 20px 50px rgba(255, 105, 180, 0.2)' }}>

                <div className="text-center mb-6">
                  <h3 className="text-3xl font-black shimmer-text">تهانينا يا أجمل إنسانة!</h3>
                </div>

                <div className="space-y-3 text-pink-700 leading-relaxed">
                  <p className="text-lg font-semibold">
                    🎉 كل عام وأنت بخير يا أجمل إنسانة في الكون!
                  </p>
                  <p>
                    في هذا اليوم الخاص، أتمنى أن يمتلئ قلبك بالفرح،
                    وأن تُحقّقي كل أحلامك وطموحاتك. 🌟
                  </p>
                  <p>
                    أنتِ تستحقين كل خير، كل حب، وكل سعادة.
                    لا تنسي أبداً كم أنتِ مميزة وجميلة. 🌸
                  </p>
                  <p className="font-bold text-pink-600">
                    عيد ميلادك... بداية أجمل فصول حياتك! ✨
                  </p>
                </div>

                <div className="flex justify-center gap-2 mt-6 text-2xl">
                  {['💕','🌸','✨','🌺','💕'].map((e, i) => (
                    <span key={i} className="animate-float-bounce" style={{ animationDelay: `${i * 0.15}s` }}>{e}</span>
                  ))}
                </div>

                <button onClick={() => setOpen(false)}
                  className="mt-6 w-full py-3 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105 active:scale-95"
                  style={{ background: 'linear-gradient(135deg, #ff69b4, #ff1493)' }}>
                  إغلاق 💕
                </button>
              </div>

              {/* Decorative stamp */}
              <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-pink-100 border-2 border-pink-300 flex items-center justify-center shadow-lg animate-float-bounce"
                style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl">💝</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}