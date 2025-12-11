export default function VirtualSellerCentered() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#f8f6f3] to-white relative overflow-hidden">
      
      {/* خط علوي ذهبي */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D9C18E] via-[#c4a76d] to-[#D9C18E]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center animate-fade-in-up">
        
        <div className="relative group w-full">
          
          {/* التوهج الخلفي */}
          <div className="absolute -inset-4 bg-gradient-to-br from-[#003B4A] to-[#004B5A] 
                          rounded-3xl blur opacity-30 group-hover:opacity-50 
                          transition duration-500" />

          {/* إطار الفيديو */}
          <div className="relative bg-gradient-to-br from-[#003B4A] to-[#004B5A] 
                          rounded-3xl p-4 shadow-2xl">
            
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D9C18E]/40">
              <iframe
                src="https://embed.liveavatar.com/v1/2faf3681-59e8-49e2-8c9e-33f1c9adb867"
                allow="microphone"
                title="LiveAvatar Embed"
                className="w-full"
                style={{ aspectRatio: "16/9" }}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
