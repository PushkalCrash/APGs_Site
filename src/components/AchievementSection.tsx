import AchievementCard from "@/components/AchievementCard";
import { ACHIEVEMENTS } from "@/config/achievements";

const AchievementsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="mb-16">
          <p className="section-eyebrow">Milestones</p>
          <h2 className="section-title">ACHIEVEMENTS</h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((achievement, i) => (
            <AchievementCard
              key={i}
              achievement={achievement}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
