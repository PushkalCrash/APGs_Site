import AchievementCard from '@/components/AchievementCard';
import { ACHIEVEMENTS } from '@/config/achievements';

const AchievementsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Milestones
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            ACHIEVEMENTS
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((achievement, i) => (
            <AchievementCard key={i} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
