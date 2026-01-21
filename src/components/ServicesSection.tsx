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
      <div className="container">
        <div className="grid gap-6 md:hidden">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>

      {/* ===== DESKTOP / TABLET (MARQUEE) - FULL WIDTH ===== */}
      <div className="relative hidden md:block overflow-hidden w-full">
        {/* Left edge fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, hsl(var(--background)), transparent)"
          }}
        />

        {/* Right edge fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, hsl(var(--background)), transparent)"
          }}
        />

        <div 
          className="flex w-max"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Render multiple tracks for seamless loop on all screen sizes */}
          {[...Array(4)].map((_, trackIndex) => (
            <div 
              key={trackIndex} 
              className="flex gap-6 animate-marquee"
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {SERVICES.map((service, i) => (
                <ServiceCard key={`${trackIndex}-${i}`} service={service} />
              ))}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;