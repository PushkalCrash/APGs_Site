interface ImpactCardProps {
  stat: {
    number: string;
    label: string;
  };
}

const ImpactCard = ({ stat }: ImpactCardProps) => {
  return (
    <div className="w-[240px] md:w-[300px] shrink-0 
                    rounded-2xl border border-white/10 
                    bg-white/5 backdrop-blur-sm
                    p-6 md:p-8 
                    transition-all duration-300
                    hover:border-primary/40 hover:bg-white/10">

      <div className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {stat.number}
      </div>

      <div className="mt-2 text-sm md:text-base text-white/70">
        {stat.label}
      </div>
    </div>
  );
};

export default ImpactCard;
