import { Achievement } from '@/config/achievements';
import {
  Award,
  Music,
  Mic,
  Radio,
} from 'lucide-react';

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
        border border-border
        bg-card
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:border-primary/60
        hover:shadow-[0_0_40px_rgba(255,180,0,0.15)]
      "
    >
      {/* Gradient overlay */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-2xl
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          bg-gradient-to-br
          from-primary/10
          via-transparent
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Icon */}
        <div
          className="
            mb-4
            w-12 h-12
            rounded-xl
            border border-primary/40
            flex items-center justify-center
            transition-all duration-300
            group-hover:border-primary
            group-hover:shadow-[0_0_20px_rgba(255,180,0,0.35)]
          "
        >
          <Icon className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
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
