import { Service } from "@/config/services";
import {
  Music,
  Mic,
  Guitar,
  Headphones,
  Radio,
  ArrowUpRight,
} from "lucide-react";

const ICONS = {
  music: Music,
  mic: Mic,
  guitar: Guitar,
  headphones: Headphones,
  radio: Radio,
};

type Props = {
  service: Service;
};

const ServiceCard = ({ service }: Props) => {
  const Icon = ICONS[service.icon];

  return (
    <a
      href={service.linkUrl || "#"}
      className="
        group
        relative
        w-[260px] sm:w-[300px]
        h-[220px]
        flex-shrink-0
        rounded-2xl
        border border-white/10
        bg-gradient-to-b from-white/5 to-transparent
        p-6
        transition
        hover:border-primary/60
        hover:shadow-[0_0_40px_rgba(255,180,0,0.15)]
      "
    >
      {/* Icon */}
      <div className="
        mb-4
        w-11 h-11
        rounded-xl
        border border-primary/40
        flex items-center justify-center
        text-primary
      ">
        <Icon size={22} />
      </div>

      {/* Title */}
      <h3 className="font-display text-lg text-white mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>

      {/* Link (desktop only) */}
      {service.linkText && (
        <span className="
          hidden md:inline-flex
          absolute bottom-5 left-6
          items-center gap-1
          text-sm text-primary
        ">
          {service.linkText}
          <ArrowUpRight size={14} />
        </span>
      )}
    </a>
  );
};

export default ServiceCard;
