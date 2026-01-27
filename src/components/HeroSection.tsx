const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

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
        <div className="relative inline-block leading-[0.85]">

          {/* Main Stack */}
          <div className="font-display text-white tracking-tight">
            <div className="text-[18vw] md:text-[16vw]">
              ARYA
            </div>
            <div className="text-[12vw] md:text-[8vw] opacity-80">
              PRADYUMN
            </div>
            <div className="text-[18vw] md:text-[16vw]">
              GUPTA
            </div>
          </div>

          {/* APG Brush Overlay */}
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              font-brush
              lakeshore
              text-[30vw] md:text-[28vw]
              text-[hsl(var(--primary))]
              pointer-events-none
              select-none
            "
            style={{
              transform: "rotate(-14deg) skewX(-4deg)",
              textShadow: "0 0 40px hsl(0 85% 55% / 0.4)"
            }}
          >
            APG
          </div>

        </div>

        {/* Tagline */}
        <p className="
          mt-10
          max-w-xl
          mx-auto
          text-muted-foreground
          text-base md:text-lg
        ">
          Musician • Instructor • Performer
        </p>

      </div>
    </section>
  );
};

export default HeroSection;
