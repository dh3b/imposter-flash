import { Category } from "@/types/game";

const STORAGE_KEY = "impostor_categories";

export const getDefaultCategories = (): Category[] => [
  {
    id: "movies",
    name: "Movies",
    enabled: false,
    wordHintPairs: [
      {
        word: "Titanic",
        hints: ["A ship", "Leonardo DiCaprio", "Iceberg", "1997 film"],
      },
      {
        word: "Star Wars",
        hints: ["Space opera", "Lightsabers", "The Force", "George Lucas"],
      },
      {
        word: "Jurassic Park",
        hints: ["Dinosaurs", "Theme park", "Steven Spielberg", "Island"],
      },
    ],
  },
  {
    id: "animals",
    name: "Animals",
    enabled: false,
    wordHintPairs: [
      {
        word: "Elephant",
        hints: ["Large mammal", "Trunk", "Africa", "Gray color"],
      },
      {
        word: "Dolphin",
        hints: ["Marine mammal", "Intelligent", "Jumps", "Ocean"],
      },
      {
        word: "Tiger",
        hints: ["Big cat", "Stripes", "Orange", "Predator"],
      },
    ],
  },
  {
    id: "food",
    name: "Food",
    enabled: false,
    wordHintPairs: [
      {
        word: "Pizza",
        hints: ["Italian dish", "Round", "Cheese", "Tomato sauce"],
      },
      {
        word: "Sushi",
        hints: ["Japanese cuisine", "Rice", "Fish", "Rolled"],
      },
      {
        word: "Burger",
        hints: ["Fast food", "Bun", "Patty", "American"],
      },
    ],
  },
  {
    id: "clash-royale",
    name: "Clash Royale",
    enabled: false,
    wordHintPairs: [
      {
        word: "Knight",
        hints: ["Mustache", "Ground", "Melee", "Common"],
      },
      {
        word: "Archers",
        hints: ["Cheap", "Women", "Ranged", "Pair"],
      },
      {
        word: "Goblins",
        hints: ["Green", "Three", "Fast", "Cheap"],
      },
      {
        word: "Giant",
        hints: ["Slow", "Building", "Rare", "Blue"],
      },
      {
        word: "PEKKA",
        hints: ["Armor", "Butterfly", "Seven", "Slow"],
      },
      {
        word: "Minions",
        hints: ["Flying", "Purple", "Three", "Common"],
      },
      {
        word: "Balloon",
        hints: ["Flying", "Bomb", "Slow", "Rare"],
      },
      {
        word: "Witch",
        hints: ["Summons", "Purple", "Splash", "Rare"],
      },
      {
        word: "Valkyrie",
        hints: ["Spin", "Red", "Rare", "Area"],
      },
      {
        word: "Skeleton Army",
        hints: ["Swarm", "Fifteen", "Bones", "Epic"],
      },
      {
        word: "Bomber",
        hints: ["Mustache", "Splash", "Ground", "Common"],
      },
      {
        word: "Musketeer",
        hints: ["Gun", "Woman", "Purple", "Rare"],
      },
      {
        word: "Baby Dragon",
        hints: ["Flying", "Splash", "Purple", "Epic"],
      },
      {
        word: "Prince",
        hints: ["Horse", "Charge", "Epic", "Lance"],
      },
      {
        word: "Wizard",
        hints: ["Beard", "Splash", "Fire", "Rare"],
      },
      {
        word: "Mini PEKKA",
        hints: ["Pancakes", "Four", "Fast", "Rare"],
      },
      {
        word: "Spear Goblins",
        hints: ["Cheap", "Three", "Ranged", "Common"],
      },
      {
        word: "Giant Skeleton",
        hints: ["Bomb", "Laugh", "Epic", "Slow"],
      },
      {
        word: "Hog Rider",
        hints: ["Pig", "Building", "Rare", "Yell"],
      },
      {
        word: "Minion Horde",
        hints: ["Six", "Flying", "Purple", "Common"],
      },
      {
        word: "Ice Wizard",
        hints: ["Legendary", "Slow", "Blue", "Beard"],
      },
      {
        word: "Royal Giant",
        hints: ["Mustache", "Ranged", "Building", "Common"],
      },
      {
        word: "Guards",
        hints: ["Shields", "Three", "Bones", "Epic"],
      },
      {
        word: "Princess",
        hints: ["Legendary", "Range", "Arrow", "Woman"],
      },
      {
        word: "Dark Prince",
        hints: ["Horse", "Charge", "Shield", "Epic"],
      },
      {
        word: "Three Musketeers",
        hints: ["Nine", "Women", "Guns", "Rare"],
      },
      {
        word: "Elixir Collector",
        hints: ["Building", "Economy", "Rare", "Purple"],
      },
      {
        word: "Ice Spirit",
        hints: ["Jump", "Freeze", "Common", "One"],
      },
      {
        word: "Fire Spirit",
        hints: ["Jump", "Three", "Suicide", "Common"],
      },
      {
        word: "Miner",
        hints: ["Legendary", "Underground", "Shovel", "Three"],
      },
      {
        word: "Bowler",
        hints: ["Boulder", "Splash", "Epic", "Knockback"],
      },
      {
        word: "Lumberjack",
        hints: ["Legendary", "Rage", "Axe", "Fast"],
      },
      {
        word: "Battle Ram",
        hints: ["Charge", "Rare", "Barbarians", "Building"],
      },
      {
        word: "Inferno Dragon",
        hints: ["Legendary", "Beam", "Flying", "Purple"],
      },
      {
        word: "Ice Golem",
        hints: ["Slow", "Death", "Rare", "Tank"],
      },
      {
        word: "Mega Minion",
        hints: ["Flying", "Purple", "Rare", "Solo"],
      },
      {
        word: "Dart Goblin",
        hints: ["Fast", "Ranged", "Rare", "Green"],
      },
      {
        word: "Goblin Gang",
        hints: ["Six", "Mixed", "Common", "Green"],
      },
      {
        word: "Electro Wizard",
        hints: ["Legendary", "Stun", "Two", "Lightning"],
      },
      {
        word: "Elite Barbarians",
        hints: ["Fast", "Two", "Common", "Mustache"],
      },
      {
        word: "Hunter",
        hints: ["Shotgun", "Epic", "Close", "Beard"],
      },
      {
        word: "Executioner",
        hints: ["Axe", "Splash", "Epic", "Mask"],
      },
      {
        word: "Bandit",
        hints: ["Legendary", "Dash", "Three", "Woman"],
      },
      {
        word: "Royal Recruits",
        hints: ["Six", "Common", "Shields", "Deploy"],
      },
      {
        word: "Night Witch",
        hints: ["Legendary", "Bats", "Summons", "Four"],
      },
      {
        word: "Bats",
        hints: ["Air", "Five", "Fast", "Common"],
      },
      {
        word: "Royal Ghost",
        hints: ["Legendary", "Invisible", "Three", "Splash"],
      },
      {
        word: "Ram Rider",
        hints: ["Legendary", "Slow", "Woman", "Building"],
      },
      {
        word: "Zappies",
        hints: ["Three", "Stun", "Rare", "Chain"],
      },
      {
        word: "Rascals",
        hints: ["Three", "Boy", "Girls", "Common"],
      },
      {
        word: "Cannon Cart",
        hints: ["Wheels", "Shield", "Rare", "Building"],
      },
      {
        word: "Mega Knight",
        hints: ["Legendary", "Jump", "Mustache", "Seven"],
      },
      {
        word: "Skeleton Barrel",
        hints: ["Flying", "Drop", "Common", "Bones"],
      },
      {
        word: "Flying Machine",
        hints: ["Ranged", "Air", "Rare", "Copter"],
      },
      {
        word: "Wall Breakers",
        hints: ["Two", "Suicide", "Building", "Epic"],
      },
      {
        word: "Royal Hogs",
        hints: ["Four", "Building", "Rare", "Pigs"],
      },
      {
        word: "Goblin Giant",
        hints: ["Spears", "Green", "Epic", "Building"],
      },
      {
        word: "Fisherman",
        hints: ["Legendary", "Hook", "Three", "Anchor"],
      },
      {
        word: "Magic Archer",
        hints: ["Legendary", "Piercing", "Four", "Arrow"],
      },
      {
        word: "Electro Dragon",
        hints: ["Epic", "Chain", "Five", "Flying"],
      },
      {
        word: "Firecracker",
        hints: ["Common", "Ranged", "Woman", "Knockback"],
      },
      {
        word: "Mighty Miner",
        hints: ["Champion", "Drill", "Four", "Underground"],
      },
      {
        word: "Elixir Golem",
        hints: ["Splits", "Rare", "Purple", "Cheap"],
      },
      {
        word: "Battle Healer",
        hints: ["Rare", "Heal", "Four", "Woman"],
      },
      {
        word: "Electro Giant",
        hints: ["Epic", "Reflect", "Eight", "Building"],
      },
      {
        word: "Electro Spirit",
        hints: ["Common", "Stun", "Jump", "Chain"],
      },
      {
        word: "Mother Witch",
        hints: ["Legendary", "Curse", "Four", "Pigs"],
      },
      {
        word: "Archer Queen",
        hints: ["Champion", "Cloak", "Five", "Woman"],
      },
      {
        word: "Golden Knight",
        hints: ["Champion", "Dash", "Four", "Gold"],
      },
      {
        word: "Skeleton King",
        hints: ["Champion", "Souls", "Four", "Bones"],
      },
      {
        word: "Phoenix",
        hints: ["Legendary", "Rebirth", "Four", "Egg"],
      },
      {
        word: "Monk",
        hints: ["Champion", "Reflect", "Five", "Ponder"],
      },
      {
        word: "Little Prince",
        hints: ["Champion", "Horse", "Three", "Guardian"],
      },
      {
        word: "Arrows",
        hints: ["Spell", "Three", "Common", "Area"],
      },
      {
        word: "Fireball",
        hints: ["Spell", "Four", "Rare", "Knockback"],
      },
      {
        word: "Zap",
        hints: ["Spell", "Two", "Common", "Stun"],
      },
      {
        word: "Lightning",
        hints: ["Spell", "Six", "Epic", "Three"],
      },
      {
        word: "Rage",
        hints: ["Spell", "Two", "Epic", "Speed"],
      },
      {
        word: "Freeze",
        hints: ["Spell", "Four", "Epic", "Stop"],
      },
      {
        word: "Mirror",
        hints: ["Spell", "Epic", "Copy", "Plus"],
      },
      {
        word: "Rocket",
        hints: ["Spell", "Six", "Rare", "High"],
      },
      {
        word: "Goblin Barrel",
        hints: ["Spell", "Three", "Epic", "Throw"],
      },
      {
        word: "Tornado",
        hints: ["Spell", "Three", "Epic", "Pull"],
      },
      {
        word: "Clone",
        hints: ["Spell", "Three", "Epic", "Duplicate"],
      },
      {
        word: "Earthquake",
        hints: ["Spell", "Three", "Rare", "Building"],
      },
      {
        word: "Poison",
        hints: ["Spell", "Four", "Epic", "Duration"],
      },
      {
        word: "Graveyard",
        hints: ["Spell", "Five", "Legendary", "Summons"],
      },
      {
        word: "The Log",
        hints: ["Spell", "Two", "Legendary", "Roll"],
      },
      {
        word: "Heal Spirit",
        hints: ["Common", "Jump", "Heal", "One"],
      },
      {
        word: "Barbarian Barrel",
        hints: ["Spell", "Two", "Epic", "Roll"],
      },
      {
        word: "Giant Snowball",
        hints: ["Spell", "Two", "Common", "Slow"],
      },
      {
        word: "Royal Delivery",
        hints: ["Spell", "Three", "Common", "Recruit"],
      },
      {
        word: "Cannon",
        hints: ["Building", "Three", "Common", "Defense"],
      },
      {
        word: "Goblin Hut",
        hints: ["Building", "Five", "Rare", "Spawner"],
      },
      {
        word: "Mortar",
        hints: ["Building", "Four", "Common", "Siege"],
      },
      {
        word: "Inferno Tower",
        hints: ["Building", "Five", "Rare", "Beam"],
      },
      {
        word: "Bomb Tower",
        hints: ["Building", "Four", "Rare", "Splash"],
      },
      {
        word: "Barbarian Hut",
        hints: ["Building", "Seven", "Rare", "Spawner"],
      },
      {
        word: "Tesla",
        hints: ["Building", "Four", "Common", "Hidden"],
      },
      {
        word: "X-Bow",
        hints: ["Building", "Six", "Epic", "Siege"],
      },
      {
        word: "Tombstone",
        hints: ["Building", "Three", "Rare", "Spawner"],
      },
      {
        word: "Furnace",
        hints: ["Building", "Four", "Rare", "Spawner"],
      },
      {
        word: "Goblin Cage",
        hints: ["Building", "Four", "Rare", "Brawler"],
      },
      {
        word: "Goblin Drill",
        hints: ["Building", "Four", "Epic", "Underground"],
      },
      {
        word: "Skeletons",
        hints: ["Three", "Common", "Bones", "Cheap"],
      },
      {
        word: "Barbarians",
        hints: ["Five", "Common", "Mustache", "Melee"],
      },
    ],
  },
];

export const loadCategories = (): Category[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error loading categories:", error);
  }
  const defaults = getDefaultCategories();
  saveCategories(defaults);
  return defaults;
};

export const saveCategories = (categories: Category[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
  } catch (error) {
    console.error("Error saving categories:", error);
  }
};

export const addCategory = (category: Category): Category[] => {
  const categories = loadCategories();
  categories.push(category);
  saveCategories(categories);
  return categories;
};

export const updateCategory = (updatedCategory: Category): Category[] => {
  const categories = loadCategories();
  const index = categories.findIndex((c) => c.id === updatedCategory.id);
  if (index !== -1) {
    categories[index] = updatedCategory;
    saveCategories(categories);
  }
  return categories;
};

export const deleteCategory = (id: string): Category[] => {
  const categories = loadCategories().filter((c) => c.id !== id);
  saveCategories(categories);
  return categories;
};

export const toggleCategory = (id: string): Category[] => {
  const categories = loadCategories();
  const category = categories.find((c) => c.id === id);
  if (category) {
    category.enabled = !category.enabled;
    saveCategories(categories);
  }
  return categories;
};
