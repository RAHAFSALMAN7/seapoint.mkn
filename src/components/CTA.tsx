import { Phone, Mail, User, MessageSquare } from "lucide-react";

interface CTAProps {
  t: any;
}

export default function CTA({ t }: CTAProps) {
  return (
    <section className="py-32 bg-gradient-to-br from-[#f8f6f3] via-[#ede7dd] to-[#f8f6f3] relative overflow-hidden">

      {/* DECORATION */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#D9C18E] via-[#c4a76d] to-[#D9C18E]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#D9C18E]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ===== LEFT CONTENT ===== */}
          <div className="animate-fade-in-up text-center lg:text-start">

            <h2 className="text-5xl md:text-6xl font-bold text-[#003B4A] mb-8 leading-tight">
              {t.cta.title}
            </h2>

            <p className="text-2xl text-gray-700 mb-14 leading-relaxed">
              {t.cta.subtitle}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-14">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/972595036932?text=Start"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-4
                           px-12 py-6 bg-gradient-to-r from-[#D9C18E] to-[#c4a76d]
                           text-white text-xl font-bold rounded-2xl
                           shadow-2xl hover:shadow-3xl
                           transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#c4a76d] to-[#D9C18E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Phone className="relative z-10" size={26} />
                <span className="relative z-10">{t.cta.whatsapp}</span>
              </a>

              {/* CALL */}
              <a
                href="tel:+972595036932"
                className="inline-flex items-center justify-center gap-4
                           px-12 py-6 bg-[#003B4A] text-white
                           text-xl font-bold rounded-2xl
                           shadow-2xl hover:bg-[#004B5A]
                           transform hover:-translate-y-2 transition-all duration-300"
              >
                <Phone size={26} />
                <span>{t.cta.call}</span>
              </a>
            </div>

            {/* NOTE */}
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              {t.cta.note}
            </p>
          </div>

          {/* ===== RIGHT FORM ===== */}
          <div className="animate-fade-in-up bg-white/70 backdrop-blur rounded-3xl p-10 shadow-2xl border border-[#D9C18E]/30">

            <h3 className="text-3xl font-bold text-[#003B4A] mb-8 text-center">
              {t.cta.formTitle || "تواصل معنا"}
            </h3>

            <form className="grid gap-6">

              {/* NAME */}
              <div className="relative">
                <User className="absolute top-1/2 -translate-y-1/2 left-4 text-[#D9C18E]" />
                <input
                  type="text"
                  placeholder={t.cta.name || "الاسم الكامل"}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#D9C18E]/30
                             focus:outline-none focus:ring-2 focus:ring-[#D9C18E]"
                />
              </div>

              {/* PHONE */}
              <div className="relative">
                <Phone className="absolute top-1/2 -translate-y-1/2 left-4 text-[#D9C18E]" />
                <input
                  type="tel"
                  placeholder={t.cta.phone || "رقم الهاتف"}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#D9C18E]/30
                             focus:outline-none focus:ring-2 focus:ring-[#D9C18E]"
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <Mail className="absolute top-1/2 -translate-y-1/2 left-4 text-[#D9C18E]" />
                <input
                  type="email"
                  placeholder={t.cta.email || "البريد الإلكتروني"}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#D9C18E]/30
                             focus:outline-none focus:ring-2 focus:ring-[#D9C18E]"
                />
              </div>

              {/* MESSAGE */}
              <div className="relative">
                <MessageSquare className="absolute top-5 left-4 text-[#D9C18E]" />
                <textarea
                  rows={4}
                  placeholder={t.cta.message || "رسالتك"}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#D9C18E]/30
                             focus:outline-none focus:ring-2 focus:ring-[#D9C18E]"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="mt-2 bg-gradient-to-r from-[#D9C18E] to-[#c4a76d]
                           text-[#003B4A] font-bold text-xl
                           py-4 rounded-xl shadow-xl
                           hover:shadow-2xl hover:scale-105 transition"
              >
                {t.cta.send || "إرسال"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
