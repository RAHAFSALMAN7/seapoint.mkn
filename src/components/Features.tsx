import { Home, Ruler, FileText } from "lucide-react";

interface FeaturesProps {
  t: any;
}

export default function Features({ t }: FeaturesProps) {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-[#003B4A] mb-6">
            {t?.pricing?.title || "الأسعار والمساحات"}
          </h2>

          <p className="text-xl text-[#003B4A]/70 max-w-3xl mx-auto">
            {t?.pricing?.subtitle || "خيارات تناسب احتياجاتك"}
          </p>

          <div className="w-32 h-1 bg-[#D9C18E] mx-auto mt-8" />
        </div>

        {/* ICONS ROW */}
        <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto text-center">

          {/* STARTING PRICE */}
          <div className="flex flex-col items-center">
            <Home size={56} className="text-[#D9C18E] mb-6" />

            <h3 className="text-2xl font-bold text-[#003B4A] mb-3">
              {t?.pricing?.labels?.price || "السعر المبدئي"}
            </h3>

            <p className="text-[#003B4A]/70 text-lg">
              {t?.projectIntro?.startingPrice || "يبدأ من ..."}
            </p>
          </div>

          {/* STARTING AREA */}
          <div className="flex flex-col items-center">
            <Ruler size={56} className="text-[#D9C18E] mb-6" />

            <h3 className="text-2xl font-bold text-[#003B4A] mb-3">
              {t?.pricing?.labels?.area || "المساحة المبدئية"}
            </h3>

            <p className="text-[#003B4A]/70 text-lg">
              {t?.projectIntro?.startingArea || "من ... م²"}
            </p>
          </div>

          {/* BROCHURE */}
          <a
            href={t?.pricing?.brochure || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <FileText
              size={56}
              className="text-[#D9C18E] mb-6 group-hover:scale-110 transition"
            />

            <h3 className="text-2xl font-bold text-[#003B4A] mb-3">
              {t?.pricing?.download || "تحميل الكتيب"}
            </h3>

            <p className="text-[#003B4A]/70 text-lg">
              PDF
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}
