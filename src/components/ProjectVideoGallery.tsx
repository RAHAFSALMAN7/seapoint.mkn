import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const videos = [
    "SEAPOINT.mp4",
    "SEAPOINTPROJECT.mp4",
    "video_MKN.mp4",
    "video.mp4",
];

interface ProjectVideoGalleryProps {
    t: {
        projectVideoGallery: {
            title: string;
            subtitle: string;
            text: string;
        };
    };
}

export default function ProjectVideoGallery({ t }: ProjectVideoGalleryProps) {
    const [current, setCurrent] = useState(0);
    const centerRef = useRef<HTMLVideoElement>(null);

    const [playing, setPlaying] = useState(true);
    const [muted, setMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const prev = () =>
        setCurrent((p) => (p === 0 ? videos.length - 1 : p - 1));

    const next = () =>
        setCurrent((p) => (p === videos.length - 1 ? 0 : p + 1));

    useEffect(() => {
        if (centerRef.current) {
            centerRef.current.currentTime = 0;
            centerRef.current.play();
            setPlaying(true);
            setProgress(0);
        }
    }, [current]);

    const togglePlay = () => {
        if (!centerRef.current) return;
        playing ? centerRef.current.pause() : centerRef.current.play();
        setPlaying(!playing);
    };

    const toggleMute = () => {
        if (!centerRef.current) return;
        centerRef.current.muted = !muted;
        setMuted(!muted);
    };

    const getIndex = (offset: number) =>
        (current + offset + videos.length) % videos.length;

    return (
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#003B4A] to-[#004B5A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">

                {/* TITLE */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                        {t.projectVideoGallery.title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white/80">
                        {t.projectVideoGallery.subtitle}
                    </p>
                </div>

                {/* TEXT */}
                <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
                    <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed">
                        {t.projectVideoGallery.text}
                    </p>
                </div>

                {/* SLIDER */}
                <div className="relative flex items-center justify-center gap-6 md:gap-12">

                    {/* LEFT – hidden on mobile */}
                    <video
                        src={`/${videos[getIndex(-1)]}`}
                        muted
                        playsInline
                        className="hidden md:block w-[220px] lg:w-[260px] h-[150px] lg:h-[180px] object-cover rounded-3xl opacity-40 scale-90"
                    />

                    {/* CENTER */}
                    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg scale-100 md:scale-110 z-10">
                        <video
                            ref={centerRef}
                            key={videos[current]}
                            src={`/${videos[current]}`}
                            autoPlay
                            loop
                            muted={muted}
                            playsInline
                            onTimeUpdate={() =>
                                centerRef.current &&
                                setProgress(centerRef.current.currentTime)
                            }
                            onLoadedMetadata={() =>
                                centerRef.current &&
                                setDuration(centerRef.current.duration)
                            }
                            className="w-full aspect-video object-cover rounded-3xl shadow-2xl"
                        />

                        {/* CONTROLS */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 bg-black/40 backdrop-blur rounded-xl px-3 py-2">
                            <button onClick={togglePlay}>
                                {playing ? (
                                    <Pause size={18} className="text-white" />
                                ) : (
                                    <Play size={18} className="text-white" />
                                )}
                            </button>

                            <button onClick={toggleMute}>
                                {muted ? (
                                    <VolumeX size={18} className="text-white" />
                                ) : (
                                    <Volume2 size={18} className="text-white" />
                                )}
                            </button>

                            <input
                                type="range"
                                min={0}
                                max={duration}
                                value={progress}
                                onChange={(e) =>
                                    centerRef.current &&
                                    (centerRef.current.currentTime = Number(e.target.value))
                                }
                                className="flex-1 h-[3px] accent-[#D9C18E] cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* RIGHT – hidden on mobile */}
                    <video
                        src={`/${videos[getIndex(1)]}`}
                        muted
                        playsInline
                        className="hidden md:block w-[220px] lg:w-[260px] h-[150px] lg:h-[180px] object-cover rounded-3xl opacity-40 scale-90"
                    />

                    {/* ARROWS */}
                    <button
                        onClick={prev}
                        className="absolute left-2 md:left-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-lg"
                    >
                        <span className="text-2xl text-[#003B4A]">‹</span>
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-2 md:right-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-lg"
                    >
                        <span className="text-2xl text-[#003B4A]">›</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
