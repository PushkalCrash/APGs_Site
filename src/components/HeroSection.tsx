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
      <div className="relative inline-block leading-none">

        {/* ARYA */}
        <div className="font-display text-white text-[24vw] md:text-[20vw] tracking-tight">
          Arya
        </div>

        {/* GUPTA — BRUSH OVERLAY */}
        <div
          className="
            absolute
            left-1/2
            bottom-[3%]
            -translate-x-1/2
            font-brush lakeshore
            text-[28vw] md:text-[24vw]
            tracking-[-0.04em]
            pointer-events-none
            select-none
          "
          style={{
            transform: "translateX(-50%) rotate(-4deg) skewX(-4deg)"
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
