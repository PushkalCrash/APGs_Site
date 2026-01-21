export type Service = {
  title: string;
  description: string;
  icon: "music" | "mic" | "guitar" | "headphones" | "radio";
  linkText?: string;
  linkUrl?: string;
};

export const SERVICES: Service[] = [
  {
    title: "Custom Songs",
    description: "Personalized songs crafted for your story.",
    icon: "music",
    linkText: "Commission",
    linkUrl: "#",
  },
  {
    title: "Live Band",
    description: "High-energy live performances for events & shows.",
    icon: "mic",
    linkText: "Book Now",
    linkUrl: "#",
  },
  {
    title: "Guitar Lessons",
    description: "Personalized sessions for beginners & intermediates.",
    icon: "guitar",
  },
  {
    title: "Sound Engineering",
    description: "Audio production & mixing guidance.",
    icon: "headphones",
  },
  {
    title: "Listen to My Music",
    description: "Stream my latest releases across platforms.",
    icon: "radio",
    linkText: "Listen",
    linkUrl: "#",
  },
];
