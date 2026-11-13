export type OfferingType = "PACKAGE" | "EXPERIENCE";

export interface Offering {
  id: string;
  name: string;
  type: OfferingType;
  priceRand: number;
  purpose: string;
  inclusions: string[];
}

export const OFFERINGS: Offering[] = [
  {
    id: "ultimate-gamer-pass",
    name: "Ultimate Gamer Pass",
    type: "PACKAGE",
    priceRand: 1500,
    purpose: "Unlimited gaming access for a full day.",
    inclusions: [
      "PC gaming",
      "Console gaming",
      "High-speed internet",
      "Snack voucher",
      "Tournament entry",
    ],
  },
  {
    id: "vip-gaming-experience",
    name: "VIP Gaming Experience",
    type: "PACKAGE",
    priceRand: 1500,
    purpose: "Premium gaming experience with exclusive facilities.",
    inclusions: [
      "Private gaming booth",
      "Premium gaming equipment",
      "Food and drinks",
      "Priority booking",
      "Personal gaming assistant",
    ],
  },
  {
    id: "esports-training",
    name: "Esports Training Package",
    type: "PACKAGE",
    priceRand: 1500,
    purpose: "Improve competitive gaming skills with professional coaching.",
    inclusions: [
      "Strategy coaching",
      "Team communication",
      "Match analysis",
      "Practice sessions",
      "Performance feedback",
    ],
  },
  {
    id: "birthday-party",
    name: "Birthday Party Package",
    type: "PACKAGE",
    priceRand: 1500,
    purpose: "Host a gaming-themed birthday celebration.",
    inclusions: [
      "Reserved gaming area",
      "Multiplayer competitions",
      "Party decorations",
      "Catering",
      "Tournament prizes",
    ],
  },
  {
    id: "virtual-reality",
    name: "Virtual Reality Experience",
    type: "EXPERIENCE",
    priceRand: 750,
    purpose: "Explore immersive virtual reality games.",
    inclusions: ["VR headset", "Choice of games", "Staff assistance"],
  },
  {
    id: "racing-simulator",
    name: "Racing Simulator Challenge",
    type: "EXPERIENCE",
    priceRand: 750,
    purpose: "Race on professional driving simulators.",
    inclusions: [
      "Racing simulator",
      "Choice of tracks",
      "Leaderboard competition",
    ],
  },
  {
    id: "escape-room",
    name: "Escape Room Challenge",
    type: "EXPERIENCE",
    priceRand: 750,
    purpose: "Solve puzzles and escape before time runs out.",
    inclusions: ["Team challenge", "Themed escape room", "Digital scorecard"],
  },
];

export const PACKAGES = OFFERINGS.filter((item) => item.type === "PACKAGE");
export const EXPERIENCES = OFFERINGS.filter(
  (item) => item.type === "EXPERIENCE",
);

export function findOfferingById(id: string | undefined): Offering | undefined {
  return OFFERINGS.find((offering) => offering.id === id);
}
