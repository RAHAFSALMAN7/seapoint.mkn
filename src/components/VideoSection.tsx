interface VideoSectionProps {
    t: any;
}

export default function VideoSection({ t }: VideoSectionProps) {
    return (
        <>
            {/* ========================= */}
            {/* سكشن الفيديو الأساسي */}
            {/* ========================= */}
            <section className="py-32 bg-gradient-to-br from-[#f8f6f3] to-white relative overflow-hidden">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* 🎥 الفيديو */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#D9C18E]/30 to-transparent rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-500" />

                            <video
                                src={`/${t.videoSection.video}`}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-[520px] md:h-[600px] object-cover rounded-3xl shadow-2xl relative z-10"
                            />
                        </div>

                        {/* 📝 النص */}
                        <div className="space-y-6 animate-fade-in-right">

                            <h3 className="text-xl font-bold text-[#003B4A]">
                                Sea Point
                            </h3>

                            <p className="text-gray-600 text-2xl leading-relaxed">
                                {t.videoSection.text}
                            </p>

                            <button className="mt-6 px-10 py-4 bg-gradient-to-r from-[#D9C18E] to-[#c4a76d] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                {t.videoSection.button}
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* سكشن Smart Home System */}
            {/* ========================= */}
            <section className="py-28 bg-white">
                <div className="max-w-6xl mx-auto text-center px-4">
                    
                    {/* العنوان */}
                    <h2 className="text-4xl font-bold text-[#003B4A] mb-4">
                        Smart Home System
                    </h2>

                    {/* الوصف */}
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
                        Transforming homes across the UAE with cutting-edge smart home automation solutions.
                        Experience the future of living with Zuccess.
                    </p>

                    {/* 🎥 الكروسل */}
                    <div className="relative w-full overflow-hidden rounded-3xl shadow-xl">
                        
                        <div className="flex animate-slide w-[200%]">
                            
                            {/* الفيديو الأول */}
                            <video
                                src="/zuccesshome.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-1/2 h-[500px] object-cover"
                            />

                            {/* الفيديو الثاني */}
                            <video
                                src="/zuccesshomesystem.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-1/2 h-[500px] object-cover"
                            />

                        </div>
                    </div>

                </div>
            </section>

            {/* أنميشن الكروسل */}
            <style>{`
                @keyframes slide {
                    0% { transform: translateX(0%); }
                    50% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }

                .animate-slide {
                    animation: slide 14s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}
