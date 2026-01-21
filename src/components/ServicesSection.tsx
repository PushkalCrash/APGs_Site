import { useState } from "react";
import { SERVICES } from "@/config/services";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative w-full py-28">
      {/* Title */}
      <div className="container">
        <div className="mb-14">
          <p className="section-eyebrow">WHAT I OFFER</p>
          <h2 className="section-title">SERVICES</h2>
        </div>
      </div>

      {/* ===== MOBILE (STATIC STACK) ===== */}
      <div className="container md:hidden">
        <div className="grid gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>

      {/* ===== DESKTOP / TABLET (MARQUEE) ===== */}
      <div className="relative hidden md:block w-full overflow-hidden">
        {/* Left edge fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)), hsla(var(--background) / 0))",
          }}
        />

        {/* Right edge fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, hsl(var(--background)), hsla(var(--background) / 0))",
          }}
        />

        <div
          className="flex w-max"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Multiple tracks for seamless loop */}
          {[...Array(4)].map((_, trackIndex) => (
            <div
              key={trackIndex}
              className="flex gap-6 animate-marquee"
              style={{
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {SERVICES.map((service, i) => (
                <ServiceCard
                  key={`${trackIndex}-${i}`}
                  service={service}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
