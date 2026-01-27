import { useState } from "react";
import { IMPACT_STATS } from "@/config/impact";
import ImpactCard from "./ImpactCard";

const ImpactSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative w-full py-24">

      {/* Title */}
      <div className="container mb-14">
        <p className="section-eyebrow"></p>
        <h2 className="section-title">WHAT MAKES APG?</h2>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">

        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)), transparent)",
          }}
        />

        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, hsl(var(--background)), transparent)",
          }}
        />

        <div
          className="flex w-max gap-6 px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => setIsPaused((prev) => !prev)}
        >
          {[...Array(3)].map((_, trackIndex) => (
            <div
              key={trackIndex}
              className="flex gap-6 animate-marquee"
              style={{
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {IMPACT_STATS.map((stat, i) => (
                <ImpactCard
                  key={`${trackIndex}-${i}`}
                  stat={stat}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
