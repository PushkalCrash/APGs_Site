import { SITE } from "@/config/site";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

      {/* ======================================================
          CHANGE VIDEO DETAILS HERE
         ====================================================== */}
      <video
        className="hero-video"
        src="/bgvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videoposteer.jpg" 
      />

      <div className="hero-overlay" />

      <div className="relative z-10 text-center px-6">

        {/* Name wrapper */}
        <div className="relative inline-block">

          {/* ARYA */}
          <div className="font-display text-white text-[24vw] md:text-[20vw] tracking-tight">
            Arya
          </div>

          {/* GUPTA — ABSOLUTE OVERLAY */}
          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              top-[0vw] md:top-[-3vw]
              font-brush
              text-[28vw] md:text-[24vw]
              text-[hsl(var(--gold))]
              tracking-[-0.03em]
              drop-shadow-[0_0_60px_rgba(255,180,0,0.7)]
              pointer-events-none
            "
              style={{
              transform: "translateX(-50%) rotate(-4deg)  skewX(-4deg)"
               }}
          >
            Gupta
          </div>

        </div>

        {/* Tagline — stays clean */}
        <p className="
              mt-[6vw] md:mt-[3vw]
              max-w-xl
              mx-auto
              text-muted-foreground
              text-base md:text-lg
              text-center
          "
        >
          Musician • Producer • Performer
        </p>


      </div>
    </section>
  );
};

export default HeroSection;
