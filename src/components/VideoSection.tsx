import { useRef, useState } from "react";

interface Video {
  src: string;
}

interface SmartHomeSection {
  title: string;
  description: string;
  videos: Video[];
}

interface VideoSectionProps {
  t: {
    videoSection: {
      video: string;
      text: string;
      button: string;
      title: string;
    };
    smartHomeSection: SmartHomeSection;
  };
}

export default function VideoSection({ t }: VideoSectionProps) {
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const carouselRefs = t.smartHomeSection.videos.map(() => useRef<HTMLVideoElement>(null));

  const [mainMuted, setMainMuted] = useState(true);
  const [carouselMuted, setCarouselMuted] = useState<boolean[]>(
    t.smartHomeSection.videos.map(() => true)
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleMainSound = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = !mainVideoRef.current.muted;
      setMainMuted(mainVideoRef.current.muted);
    }
  };

  const toggleCarouselSound = (index: number) => {
    const vid = carouselRefs[index].current;
    if (vid) {
      vid.muted = !vid.muted;
      setCarouselMuted((prev) => prev.map((m, i) => (i === index ? vid.muted : m)));
    }
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? carouselRefs.length - 1 : prev - 1;
      const vid = carouselRefs[newIndex].current;
      if (vid) {
        vid.muted = carouselMuted[newIndex];
        vid.play();
      }
      return newIndex;
    });
  };

  const nextVideo = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === carouselRefs.length - 1 ? 0 : prev + 1;
      const vid = carouselRefs[newIndex].current;
      if (vid) {
        vid.muted = carouselMuted[newIndex];
        vid.play();
      }
      return newIndex;
    });
  };

  return (
    <>
      {/* الفيديو الرئيسي */}
      <section className="py-32 bg-gradient-to-br from-[#f8f6f3] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <video
                ref={mainVideoRef}
                src={`/${t.videoSection.video}`}
                autoPlay
                loop
                muted={mainMuted}
                playsInline
                className="w-full h-[520px] md:h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              <button
                onClick={toggleMainSound}
                className="absolute bottom-6 left-6 bg-black/50 text-white px-4 py-2 rounded-xl hover:bg-black/70 transition z-20"
              >
                {mainMuted ? "🔇" : "🔊"}
              </button>
            </div>

            <div className="space-y-6 animate-fade-in-right">
              <h3 className="text-xl font-bold text-[#003B4A]">{t.videoSection.title}</h3>
              <p className="text-gray-600 text-2xl leading-relaxed">{t.videoSection.text}</p>
              <button className="mt-6 px-10 py-4 bg-gradient-to-r from-[#D9C18E] to-[#c4a76d] text-white font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300">
                {t.videoSection.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* كروسيل Smart Home */}
      <section className="py-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#003B4A] mb-4">{t.smartHomeSection.title}</h2>
          <p className="text-gray-600 mb-8">{t.smartHomeSection.description}</p>

          <div className="relative w-full h-[520px] md:h-[600px] mx-auto">
            <video
              ref={carouselRefs[currentIndex]}
              src={`/${t.smartHomeSection.videos[currentIndex].src}`}
              autoPlay
              loop
              muted={carouselMuted[currentIndex]}
              playsInline
              className="w-full h-full object-cover rounded-3xl shadow-xl"
            />

            {/* أزرار الأسهم */}
            <button
              onClick={prevVideo}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-3 rounded-full shadow-lg z-20"
            >
              &#8592;
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-3 rounded-full shadow-lg z-20"
            >
              &#8594;
            </button>

            {/* زر الصوت */}
            <button
              onClick={() => toggleCarouselSound(currentIndex)}
              className="absolute bottom-6 right-6 bg-black/50 text-white px-4 py-2 rounded-xl hover:bg-black/70 transition z-20"
            >
              {carouselMuted[currentIndex] ? "🔇" : "🔊"}
            </button>
          </div>

          {/* لا يوجد أي نص أسفل الفيديوهات */}
        </div>
      </section>
    </>
  );
}
