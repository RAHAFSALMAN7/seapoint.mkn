import { useRef, useState } from "react";

interface VideoSectionProps {
    t: any;
}

export default function VideoSection({ t }: VideoSectionProps) {
    // References لتشغيل الصوت لكل فيديو
    const mainVideoRef = useRef<HTMLVideoElement>(null);
    const video1Ref = useRef<HTMLVideoElement>(null);
    const video2Ref = useRef<HTMLVideoElement>(null);

    const [mainMuted, setMainMuted] = useState(true);
    const [video1Muted, setVideo1Muted] = useState(true);
    const [video2Muted, setVideo2Muted] = useState(true);

    // Carousel state
    const [currentIndex, setCurrentIndex] = useState(0);

    const videos = [
        { src: "/zuccesshome.mp4", ref: video1Ref, mutedState: video1Muted, setMuted: setVideo1Muted },
        { src: "/zuccesshomesystem.mp4", ref: video2Ref, mutedState: video2Muted, setMuted: setVideo2Muted },
    ];

    const next = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

    const toggleMainSound = () => {
        if (mainVideoRef.current) {
            mainVideoRef.current.muted = !mainVideoRef.current.muted;
            setMainMuted(mainVideoRef.current.muted);
        }
    };

    const toggleCarouselSound = (index: number) => {
        const vid = videos[index];
        if (vid.ref.current) {
            vid.ref.current.muted = !vid.ref.current.muted;
            vid.setMuted(vid.ref.current.muted);
        }
    };

    return (
        <>
            {/* ========================= */}
            {/* سكشن الفيديو الأساسي */}
            {/* ========================= */}
            <section className="py-32 bg-gradient-to-br from-[#f8f6f3] to-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* 🎥 الفيديو الأساسي */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#D9C18E]/30 to-transparent rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-500" />

                            <video
                                ref={mainVideoRef}
                                src={`/${t.videoSection.video}`}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-[520px] md:h-[600px] object-cover rounded-3xl shadow-2xl relative z-10"
                            />

                            {/* زر الصوت لفيديو سي بوينت */}
                            <button
                                onClick={toggleMainSound}
                                className="absolute bottom-6 left-6 bg-black/50 text-white px-4 py-2 rounded-xl hover:bg-black/70 transition"
                            >
                                {mainMuted ? "Unmute" : "Mute"}
                            </button>
                        </div>

                        {/* النص */}
                        <div className="space-y-6 animate-fade-in-right">
                            <h3 className="text-xl font-bold text-[#003B4A]">Sea Point</h3>
                            <p className="text-gray-600 text-2xl leading-relaxed">{t.videoSection.text}</p>
                            <button className="mt-6 px-10 py-4 bg-gradient-to-r from-[#D9C18E] to-[#c4a76d] text-white font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300">
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
                    <h2 className="text-4xl font-bold text-[#003B4A] mb-4">Smart Home System</h2>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
                        Transforming homes across the UAE with cutting-edge smart home automation solutions.
                        Experience the future of living with Zuccess.
                    </p>

                    {/* 🎥 كروسل الفيديو */}
                    <div className="relative w-full h-[500px] mx-auto overflow-hidden rounded-3xl shadow-xl">

                        {/* الفيديو الحالي */}
                        <video
                            ref={videos[currentIndex].ref}
                            src={videos[currentIndex].src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-all duration-700"
                        />

                        {/* زر الصوت للفيديو الحالي */}
                        <button
                            onClick={() => toggleCarouselSound(currentIndex)}
                            className="absolute bottom-6 left-6 bg-black/50 text-white px-4 py-2 rounded-xl hover:bg-black/70 transition"
                        >
                            {videos[currentIndex].mutedState ? "Unmute" : "Mute"}
                        </button>

                        {/* سهم يسار */}
                        <button
                            onClick={prev}
                            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
                        >
                            ‹
                        </button>

                        {/* سهم يمين */}
                        <button
                            onClick={next}
                            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
                        >
                            ›
                        </button>

                    </div>

                </div>
            </section>
        </>
    );
}
