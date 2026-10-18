
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

function MotionCarousel({ motions }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex((index) =>
      (index - 1 + motions.length) % motions.length
    );
  };

  const next = () => {
    setActiveIndex((index) =>
      (index + 1) % motions.length
    );
  };

  if (!motions?.length) return null;

  return (
    <section className="w-full max-w-6xl mx-auto mt-10">
      {/* Vídeo principal */}
      <div className="relative overflow-hidden rounded-2xl
                      border border-white/10 bg-neutral-950
                      shadow-2xl">
        <video
          key={motions[activeIndex]}
          src={motions[activeIndex]}
          preload="none"
          loading="lazy"
          autoPlay
          muted
          loop
          playsInline
          className="w-full aspect-video object-contain"
        />

        {/* Navegación */}
        {motions.length > 1 && (
          <>
            <Button 
            onClick={previous}
            aria-label="Vídeo anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer
                         rounded-full bg-black/60 text-white
                         w-11 h-11 hover:bg-white/25
                         transition"
            >
                <ChevronLeft></ChevronLeft>
            </Button>
            
            <Button
            onClick={next}
            aria-label="Vídeo siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer
                         rounded-full bg-black/60 text-white
                         w-11 h-11 hover:bg-white/25
                         transition"
            >
                <ChevronRight></ChevronRight>
            </Button>           
          </>
        )}
      </div>

      {/* Informacion y progreso */}
      <div className="flex items-center justify-between
                      text-white mt-5 mb-4">
        <p className="text-sm text-neutral-400">
          MOTION DESIGN / {String(activeIndex + 1).padStart(2, "0")}
          {" — "}
          {String(motions.length).padStart(2, "0")}
        </p>

        <p className="text-sm text-neutral-400">
          {Math.round(((activeIndex + 1) / motions.length) * 100)}%
        </p>
      </div>

      <div className="flex gap-2 mb-5">
        {motions.map((motion, index) => (
          <button
            key={motion}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ver vídeo ${index + 1}`}
            className={`h-1 flex-1 rounded-full transition-all
              ${
                activeIndex === index
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/50"
              }`}
          />
        ))}
      </div>

      {/* Miniaturas navegables */}
      <div className="grid grid-cols-4 gap-3">
        {motions.map((motion, index) => (
          <button
            key={motion}
            onClick={() => setActiveIndex(index)}
            className={`overflow-hidden rounded-lg border
              transition-all
              ${
                activeIndex === index
                  ? "border-white opacity-100"
                  : "border-white/10 opacity-50 hover:opacity-100"
              }`}
          >
            <video
              src={motion}
              muted
              playsInline
              preload="metadata"
              className="w-full aspect-video object-cover"
            />
            <span className="block text-white text-xs py-2">
              Motion {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default MotionCarousel;