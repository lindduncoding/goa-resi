import React, { useEffect, useRef } from 'react'

export default function Gallery({ embeds }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const scriptId = "instagram-embed-script";
    const scriptExists = document.getElementById(scriptId);

    // If the embed.js is not loaded yet, load it
    if (!scriptExists) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already exists, manually reprocess embeds
      window.instgrm?.Embeds.process();
    }
  }, [embeds]);

  return (
    <div className="w-full px-4 sm:px-8 lg:px-32 py-12 bg-white flex flex-col items-center gap-10">
      <h2 className="text-center text-green-800 text-4xl sm:text-5xl font-bold font-outfit">Gallery</h2>

      {/* Dekstop */}
      <div ref={containerRef} className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-full">
        {embeds.map((embedHtml, idx) => (
          <div
            key={idx}
            className="w-full"
            dangerouslySetInnerHTML={{ __html: embedHtml }}
          />
        ))}
      </div>

      {/* Mobile */}
      <div className="block sm:hidden w-full overflow-x-auto">
        <div className="flex gap-4 w-max">
          {embeds.map((embedHtml, idx) => (
            <div
              key={idx}
              className="min-w-[90vw] flex-shrink-0"
              dangerouslySetInnerHTML={{ __html: embedHtml }}
            />
          ))}
        </div>
      </div>
      
      <button
        className="mt-4 px-6 py-3 rounded-full shadow-lg outline outline-1 outline-green-800 text-green-800 text-lg font-semibold font-outfit uppercase hover:bg-green-100 transition"
        onClick={() => window.open('https://www.instagram.com/goaresi/', '_blank')}
      >
        Lihat Galeri
      </button>
    </div>
  )
}
