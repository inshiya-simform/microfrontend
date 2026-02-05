import type { Product } from "../types/productType";

export const Products: Product[] = [
  {
    id: "p-101",
    title: "Bluetooth Portable Speaker",
    cost: 59.99,
    description: "Compact waterproof speaker with deep bass and 12-hour battery life.",
    category: "Electronics",
    stock: 120,
    isWishlisted: false,
    quantityAdded: 1,
    rating: 4.3,
    reviews: [
      {
        user: {
          firstname: "Ryan",
          lastname: "Cooper",
          profileImage: "https://i.pravatar.cc/150?img=1",
        },
        comment: "Loud and clear for its size.",
        rated: 4,
      },
      {
        user: {
          firstname: "Mia",
          lastname: "Hernandez",
          profileImage: "https://i.pravatar.cc/150?img=2",
        },
        comment: "Perfect for beach trips.",
        rated: 5,
      },
    ],
  },
  {
    id: "p-102",
    title: "Adjustable Laptop Stand",
    cost: 39.99,
    description: "Aluminum laptop stand with adjustable height and cooling support.",
    category: "Office",
    stock: 85,
    isWishlisted: true,
    quantityAdded: 0,
    rating: 4.5,
    reviews: [
      {
        user: {
          firstname: "Daniel",
          lastname: "Nguyen",
          profileImage: "https://i.pravatar.cc/150?img=3",
        },
        comment: "Improved my posture instantly.",
        rated: 5,
      },
    ],
  },
  {
    id: "p-103",
    title: "Silent Wireless Mouse",
    cost: 25.99,
    description: "Ergonomic wireless mouse with silent clicks.",
    category: "Accessories",
    stock: 200,
    isWishlisted: false,
    quantityAdded: 2,
    rating: 4.2,
    reviews: [
      {
        user: {
          firstname: "Olivia",
          lastname: "Green",
          profileImage: "https://i.pravatar.cc/150?img=4",
        },
        comment: "Very smooth and quiet.",
        rated: 4,
      },
    ],
  },
  {
    id: "p-104",
    title: "USB-C Hub 8-in-1",
    cost: 54.99,
    description: "Multiport USB-C hub with HDMI, Ethernet, and USB ports.",
    category: "Electronics",
    stock: 64,
    isWishlisted: true,
    quantityAdded: 1,
    rating: 4.6,
    reviews: [
      {
        user: {
          firstname: "Kevin",
          lastname: "Brooks",
          profileImage: "https://i.pravatar.cc/150?img=5",
        },
        comment: "Works flawlessly with my laptop.",
        rated: 5,
      },
    ],
  },
  {
    id: "p-105",
    title: "Smart LED Light Strip",
    cost: 29.99,
    description: "RGB LED strip with app and voice control.",
    category: "Home",
    stock: 150,
    isWishlisted: false,
    quantityAdded: 3,
    rating: 4.4,
    reviews: [
      {
        user: {
          firstname: "Sophie",
          lastname: "Turner",
          profileImage: "https://i.pravatar.cc/150?img=6",
        },
        comment: "Amazing ambience.",
        rated: 5,
      },
    ],
  },

  {
    id: "p-106",
    title: "Memory Foam Pillow",
    cost: 45.0,
    description: "Ergonomic pillow for neck and spine alignment.",
    category: "Home",
    stock: 90,
    isWishlisted: true,
    quantityAdded: 1,
    rating: 4.7,
    reviews: [
      {
        user: {
          firstname: "Laura",
          lastname: "White",
          profileImage: "https://i.pravatar.cc/150?img=7",
        },
        comment: "Best sleep I've had in years.",
        rated: 5,
      },
    ],
  },
  {
    id: "p-107",
    title: "Weighted Blanket 15lbs",
    cost: 89.99,
    description: "Premium weighted blanket for stress relief and deep sleep.",
    category: "Home",
    stock: 42,
    isWishlisted: false,
    quantityAdded: 0,
    rating: 4.6,
    reviews: [
      {
        user: {
          firstname: "Ben",
          lastname: "Morris",
          profileImage: "https://i.pravatar.cc/150?img=8",
        },
        comment: "Very calming and cozy.",
        rated: 5,
      },
    ],
  },
  {
    id: "p-108",
    title: "Yoga Mat Extra Thick",
    cost: 36.99,
    description: "Non-slip yoga mat with extra cushioning.",
    category: "Fitness",
    stock: 110,
    isWishlisted: false,
    quantityAdded: 2,
    rating: 4.8,
    reviews: [
      {
        user: {
          firstname: "Hannah",
          lastname: "Kim",
          profileImage: "https://i.pravatar.cc/150?img=9",
        },
        comment: "Great grip and comfort.",
        rated: 5,
      },
    ],
  },
  {
    id: "p-109",
    title: "Adjustable Dumbbell Set",
    cost: 159.99,
    description: "Compact adjustable dumbbells for full-body workouts.",
    category: "Fitness",
    stock: 35,
    isWishlisted: true,
    quantityAdded: 0,
    rating: 4.7,
    reviews: [
      {
        user: {
          firstname: "Marcus",
          lastname: "Lee",
          profileImage: "https://i.pravatar.cc/150?img=10",
        },
        comment: "Solid and space-saving.",
        rated: 5,
      },
    ],
  },
  {
    id: "p-110",
    title: "Air Fryer 6L Digital",
    cost: 129.99,
    description: "Large-capacity air fryer with digital presets.",
    category: "Kitchen",
    stock: 50,
    isWishlisted: true,
    quantityAdded: 1,
    rating: 4.6,
    reviews: [
      {
        user: {
          firstname: "Natalie",
          lastname: "Perez",
          profileImage: "https://i.pravatar.cc/150?img=11",
        },
        comment: "Cooks evenly and fast.",
        rated: 5,
      },
    ],
  },

  // --- continuing ---
  {
    id: "p-111",
    title: "Chef Knife 8-inch",
    cost: 69.99,
    description: "High-carbon stainless steel chef knife.",
    category: "Kitchen",
    stock: 70,
    isWishlisted: false,
    quantityAdded: 1,
    rating: 4.9,
    reviews: [
      {
        user: {
          firstname: "Tom",
          lastname: "Anderson",
          profileImage: "https://i.pravatar.cc/150?img=12",
        },
        comment: "Extremely sharp.",
        rated: 5,
      },
    ],
  },
  {
    id: "p-112",
    title: "Electric Coffee Grinder",
    cost: 49.99,
    description: "Stainless steel grinder for beans and spices.",
    category: "Kitchen",
    stock: 65,
    isWishlisted: false,
    quantityAdded: 0,
    rating: 4.3,
    reviews: [
      {
        user: {
          firstname: "Isabella",
          lastname: "Rossi",
          profileImage: "https://i.pravatar.cc/150?img=13",
        },
        comment: "Consistent grind every time.",
        rated: 4,
      },
    ],
  },
  {
    id: "p-113",
    title: "Leather Crossbody Bag",
    cost: 119.99,
    description: "Genuine leather crossbody bag with adjustable strap.",
    category: "Fashion",
    stock: 40,
    isWishlisted: true,
    quantityAdded: 0,
    rating: 4.6,
    reviews: [
      {
        user: {
          firstname: "Chloe",
          lastname: "Martin",
          profileImage: "https://i.pravatar.cc/150?img=14",
        },
        comment: "Stylish and practical.",
        rated: 5,
      },
    ],
  },
  {
    id: "p-114",
    title: "Minimalist Wrist Watch",
    cost: 89.99,
    description: "Sleek analog watch with leather strap.",
    category: "Fashion",
    stock: 55,
    isWishlisted: false,
    quantityAdded: 1,
    rating: 4.4,
    reviews: [
      {
        user: {
          firstname: "Noah",
          lastname: "Adams",
          profileImage: "https://i.pravatar.cc/150?img=15",
        },
        comment: "Clean and elegant.",
        rated: 4,
      },
    ],
  },

  // --- TRAVEL, OFFICE, MISC ---
  {
    id: "p-115",
    title: "Carry-On Travel Backpack",
    cost: 99.99,
    description: "Airline-approved backpack with laptop compartment.",
    category: "Travel",
    stock: 60,
    isWishlisted: true,
    quantityAdded: 0,
    rating: 4.7,
    reviews: [
      {
        user: {
          firstname: "Ava",
          lastname: "Lopez",
          profileImage: "https://i.pravatar.cc/150?img=16",
        },
        comment: "Perfect for short trips.",
        rated: 5,
      },
    ],
  },
  {
    id: "p-116",
    title: "Packing Cubes Set",
    cost: 29.99,
    description: "Set of 6 packing cubes for organized travel.",
    category: "Travel",
    stock: 100,
    isWishlisted: false,
    quantityAdded: 1,
    rating: 4.6,
    reviews: [
      {
        user: {
          firstname: "Leo",
          lastname: "Ramirez",
          profileImage: "https://i.pravatar.cc/150?img=17",
        },
        comment: "Keeps luggage neat.",
        rated: 5,
      },
    ],
  },
  {
    id: "p-117",
    title: "Ergonomic Office Chair",
    cost: 249.99,
    description: "Adjustable office chair with lumbar support.",
    category: "Office",
    stock: 25,
    isWishlisted: true,
    quantityAdded: 0,
    rating: 4.8,
    reviews: [
      {
        user: {
          firstname: "Samuel",
          lastname: "Young",
          profileImage: "https://i.pravatar.cc/150?img=18",
        },
        comment: "Super comfortable for long hours.",
        rated: 5,
      },
    ],
  },
  {
    id: "p-118",
    title: "Desk Organizer Tray",
    cost: 24.99,
    description: "Wooden desk organizer for accessories.",
    category: "Office",
    stock: 140,
    isWishlisted: false,
    quantityAdded: 1,
    rating: 4.2,
    reviews: [
      {
        user: {
          firstname: "Grace",
          lastname: "Hill",
          profileImage: "https://i.pravatar.cc/150?img=19",
        },
        comment: "Clean and minimal.",
        rated: 4,
      },
    ],
  },
  {
    id: "p-119",
    title: "Indoor Plant Starter Kit",
    cost: 39.99,
    description: "Grow herbs indoors with ease.",
    category: "Garden",
    stock: 75,
    isWishlisted: false,
    quantityAdded: 2,
    rating: 4.5,
    reviews: [
      {
        user: {
          firstname: "Lily",
          lastname: "Evans",
          profileImage: "https://i.pravatar.cc/150?img=20",
        },
        comment: "Fun and easy.",
        rated: 5,
      },
    ],
  },
  {
    id: "p-120",
    title: "Reusable Grocery Bags Set",
    cost: 19.99,
    description: "Durable eco-friendly shopping bags.",
    category: "Lifestyle",
    stock: 180,
    isWishlisted: false,
    quantityAdded: 3,
    rating: 4.4,
    reviews: [
      {
        user: {
          firstname: "Oscar",
          lastname: "Diaz",
          profileImage: "https://i.pravatar.cc/150?img=21",
        },
        comment: "Very strong and washable.",
        rated: 4,
      },
    ],
  },
];