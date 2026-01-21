import { Achievement } from "@/config/achievements";
import {
  Award,
  Music,
  Mic,
  Radio,
} from "lucide-react";

const ICONS = {
  award: Award,
  music: Music,
  mic: Mic,
  radio: Radio,
};

type Props = {
  achievement: Achievement;
};

const AchievementCard = ({ achievement }: Props) => {
  const Icon = ICONS[achievement.icon];

  return (
    <div
      className="
        group relative
        h-full
        rounded-2xl
        border
        transition-all duration-300 ease-out
        hover:-translate-y-1
      "
      style={{
        backgroundColor: "hsla(var(--card) / 0.85)",
        borderColor: "hsla(var(--border) / 1)",
      }}
    >
      {/* Hover glow */}
      <div
        className="
          absolute inset-0 rounded-2xl
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
        "
        style={{
          boxShadow:
            "0 0 14px hsl(0 85% 55% / 0.35), 0 0 28px hsl(0 85% 55% / 0.2)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Icon */}
        <div
          className="
            mb-4
            w-12 h-12
            rounded-xl
            flex items-center justify-center
            transition-all duration-300
          "
          style={{
            border: "1px solid hsla(var(--primary) / 0.4)",
            color: "hsl(var(--primary))",
          }}
        >
          <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
        </div>

        {/* Title */}
        <h3 className="font-display text-lg text-foreground mb-2">
          {achievement.title}
        </h3>

        {/* Description */}
        {achievement.description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {achievement.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default AchievementCard;
