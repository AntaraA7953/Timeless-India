export interface Dish {
  id: number;
  name: string;
  image: string;
  imageLink: string; // <-- add this
  region: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  videoId: string;
  //videoLink: string; // <-- add this
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  cookingTips: string[];
}

// ... keep existing code (all 25 dish objects with their complete data)
export const dishes: Dish[] = [
  {
    id: 1,
    name: "Butter Chicken",
    image: "photo-1603894584373-5ac82b2ae398",
    imageLink: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/05/butter-chicken-murgh-makhani.jpg.webp",
    region: "Delhi",
    cookTime: "45 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Rich and creamy tomato-based curry with tender chicken pieces, aromatic spices, and a touch of butter. This iconic North Indian dish is perfect with naan or basmati rice.",
    videoId: "a03U45jFxOI",
   // videoLink: "https://www.youtube.com/watch?v=a03c6gsJL6I",
    nutrition: {
      calories: 420,
      protein: "28g",
      carbs: "12g",
      fat: "28g"
    },
    cookingTips: [
      "Marinate chicken for at least 30 minutes for best flavor",
      "Use heavy cream at room temperature to prevent curdling",
      "Simmer on low heat to avoid burning the tomato base",
      "Add a pinch of sugar if the tomatoes are too acidic"
    ],
    ingredients: [
      "1 lb boneless chicken, cut into pieces",
      "1 cup heavy cream",
      "1 can (14 oz) crushed tomatoes",
      "2 tbsp butter",
      "1 large onion, finely chopped",
      "4 cloves garlic, minced",
      "1 inch ginger, grated",
      "1 tsp garam masala",
      "1 tsp cumin powder",
      "1 tsp coriander powder",
      "1/2 tsp turmeric",
      "1/2 tsp red chili powder",
      "Salt to taste",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Marinate chicken pieces with yogurt, salt, and half the spices for 30 minutes.",
      "Heat butter in a large pan and sauté onions until golden brown.",
      "Add garlic and ginger, cook for 1 minute until fragrant.",
      "Add remaining spices and cook for 30 seconds.",
      "Add crushed tomatoes and simmer for 10 minutes until sauce thickens.",
      "Add marinated chicken and cook for 15-20 minutes until fully cooked.",
      "Stir in heavy cream and simmer for 5 minutes.",
      "Garnish with fresh cilantro and serve hot with rice or naan."
    ]
  },
  {
    id: 2,
    name: "Biryani",
    image: "photo-1589302168068-964664d93dc0",
    imageLink: "https://images.unsplash.com/photo-1563379091339-03246963d96c",
    region: "Telangana",
    cookTime: "90 mins",
    servings: 6,
    difficulty: "Hard",
    description: "Aromatic basmati rice layered with spiced meat or vegetables, cooked in a sealed pot to perfection. This royal dish is a celebration of flavors and fragrances.",
    videoId: "95BCU1n268w",
    //videoLink: "https://www.youtube.com/watch?v=qbp5tOtJkH0",
    nutrition: {
      calories: 600,
      protein: "30g",
      carbs: "80g",
      fat: "20g"
    },
    cookingTips: [
      "Use aged basmati rice for better texture",
      "Layer the meat and rice for even cooking",
      "Seal the pot with dough to trap steam",
      "Let it rest after cooking for best flavor"
    ],
    ingredients: [
      "2 cups basmati rice",
      "1 lb mutton or chicken",
      "1 cup yogurt",
      "2 large onions, sliced and fried",
      "1/4 cup ghee",
      "1 tsp saffron soaked in warm milk",
      "4-5 green cardamom",
      "2 black cardamom",
      "1 inch cinnamon stick",
      "4-5 cloves",
      "2 bay leaves",
      "1 tsp cumin seeds",
      "1 tsp red chili powder",
      "1/2 tsp turmeric",
      "Fresh mint leaves",
      "Salt to taste"
    ],
    instructions: [
      "Soak basmati rice for 30 minutes, then drain.",
      "Marinate meat with yogurt, spices, and half the fried onions for 1 hour.",
      "Cook rice with whole spices until 70% done, then drain.",
      "In a heavy-bottomed pot, layer the marinated meat at the bottom.",
      "Cover with partially cooked rice, remaining fried onions, mint, and saffron milk.",
      "Dot with ghee and cover with aluminum foil, then place the lid tightly.",
      "Cook on high heat for 3-4 minutes, then reduce to low heat for 45 minutes.",
      "Let it rest for 10 minutes before opening. Gently mix and serve hot."
    ]
  },
  {
    id: 3,
    name: "Masala Dosa",
    image: "photo-1743517894265-c86ab035adef",
    imageLink: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
    region: "Karnataka",
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Crispy, golden crepe made from fermented rice and lentil batter, filled with spiced potato curry. A South Indian breakfast favorite served with coconut chutney and sambar.",
    videoId: "mDqkxZ3UVzc",
    //videoLink: "https://www.youtube.com/watch?v=5A9EPnXkVd0",
    nutrition: {
      calories: 250,
      protein: "8g",
      carbs: "40g",
      fat: "8g"
    },
    cookingTips: [
      "Ferment the batter overnight for best results",
      "Use a non-stick pan for easy flipping",
      "Spread the batter thin for crispy dosas",
      "Serve immediately for the best texture"
    ],
    ingredients: [
      "2 cups dosa batter (fermented)",
      "4 medium potatoes, boiled and cubed",
      "1 large onion, chopped",
      "2 green chilies, slit",
      "1 tsp mustard seeds",
      "1 tsp cumin seeds",
      "10-12 curry leaves",
      "1/2 tsp turmeric",
      "1 tsp ginger-garlic paste",
      "2 tbsp oil",
      "Salt to taste",
      "Fresh coriander leaves",
      "Coconut chutney for serving",
      "Sambar for serving"
    ],
    instructions: [
      "Heat oil in a pan, add mustard seeds and cumin seeds until they splutter.",
      "Add curry leaves, green chilies, and onions. Sauté until onions are translucent.",
      "Add ginger-garlic paste and cook for 1 minute.",
      "Add turmeric, boiled potatoes, salt, and mix gently.",
      "Cook for 5-7 minutes, garnish with coriander and set aside.",
      "Heat a non-stick pan, pour a ladle of batter and spread it thin in circular motion.",
      "Drizzle oil around the edges and cook until golden and crispy.",
      "Place potato filling on one half, fold the dosa and serve hot with chutney and sambar."
    ]
  },
  {
    id: 4,
    name: "Rajma",
    image: "photo-1585937421612-70a008356fbe",
    imageLink: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    region: "Punjab",
    cookTime: "60 mins",
    servings: 4,
    difficulty: "Easy",
    description: "Hearty red kidney bean curry cooked in a rich tomato-onion gravy with aromatic spices. This protein-rich North Indian comfort food pairs perfectly with steamed rice.",
    videoId: "M_ncAJhIaIU",
    //videoLink: "https://www.youtube.com/watch?v=UbR7HSfhKJs",
    nutrition: {
      calories: 350,
      protein: "20g",
      carbs: "60g",
      fat: "10g"
    },
    cookingTips: [
      "Soak rajma overnight for better cooking",
      "Pressure cook for even tenderness",
      "Use fresh tomatoes for a richer flavor",
      "Garnish with fresh cilantro for added freshness"
    ],
    ingredients: [
      "2 cups red kidney beans, soaked overnight",
      "3 large tomatoes, chopped",
      "2 onions, finely chopped",
      "4 cloves garlic, minced",
      "1 inch ginger, grated",
      "2 green chilies, slit",
      "1 tsp cumin seeds",
      "1 tsp coriander powder",
      "1 tsp garam masala",
      "1/2 tsp red chili powder",
      "1/2 tsp turmeric",
      "2 tbsp oil",
      "Salt to taste",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Pressure cook soaked rajma with salt until soft and tender (about 15-20 minutes).",
      "Heat oil in a large pan, add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 2 minutes.",
      "Add tomatoes and cook until they break down and form a thick paste.",
      "Add all the dry spices and cook for 1 minute.",
      "Add cooked rajma along with its cooking liquid.",
      "Simmer for 15-20 minutes until the gravy thickens. Garnish with cilantro and serve."
    ]
  },
  {
    id: 5,
    name: "Pav Bhaji",
    image: "photo-1606491956689-2ea866880c84",
    imageLink: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
    region: "Maharashtra",
    cookTime: "45 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Spicy mixed vegetable curry served with buttered bread rolls. This popular Mumbai street food is a perfect blend of flavors and textures that will tantalize your taste buds.",
    videoId: "gkH2eqFb_YE",
    //videoLink: "https://www.youtube.com/watch?v=2oHU1_tv7KQ",
    nutrition: {
      calories: 400,
      protein: "10g",
      carbs: "60g",
      fat: "15g"
    },
    cookingTips: [
      "Use a mix of seasonal vegetables for best flavor",
      "Mash the bhaji well for a creamy texture",
      "Toast pav with butter for extra richness",
      "Serve with chopped onions and lemon wedges"
    ],
    ingredients: [
      "8 pav (bread rolls)",
      "4 medium potatoes, boiled and mashed",
      "1 cup mixed vegetables (peas, carrots, bell peppers)",
      "2 large onions, finely chopped",
      "4 tomatoes, finely chopped",
      "4 tbsp butter",
      "2 tbsp pav bhaji masala",
      "1 tsp red chili powder",
      "1/2 tsp turmeric",
      "4 cloves garlic, minced",
      "1 inch ginger, grated",
      "Salt to taste",
      "Lemon wedges and onions for serving"
    ],
    instructions: [
      "Heat 2 tbsp butter in a large pan, add onions and sauté until translucent.",
      "Add garlic and ginger, cook for 1 minute.",
      "Add tomatoes and cook until they break down completely.",
      "Add mixed vegetables and cook for 5-7 minutes.",
      "Add mashed potatoes, pav bhaji masala, chili powder, turmeric, and salt.",
      "Mash everything together and cook for 10-15 minutes, stirring frequently.",
      "Add water if needed to achieve desired consistency.",
      "Heat remaining butter on a griddle, slice pav and toast until golden. Serve hot with bhaji."
    ]
  },
  {
    id: 6,
    name: "Chole Bhature",
    image: "https://www.happy-tummy.co.in/wp-content/uploads/2020/07/Chole-Bhature-scaled.jpg",
    imageLink: "https://www.happy-tummy.co.in/wp-content/uploads/2020/07/Chole-Bhature-scaled.jpg",
    region: "Haryana",
    cookTime: "75 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Spicy chickpea curry paired with fluffy deep-fried bread. This iconic North Indian combination is a weekend favorite that brings families together around the dining table.",
    videoId: "aFzBnNWEu5Y",
    //videoLink: "https://www.youtube.com/watch?v=dzz3j_G5WqI",
    nutrition: {
      calories: 500,
      protein: "20g",
      carbs: "70g",
      fat: "15g"
    },
    cookingTips: [
      "Soak chickpeas overnight for better texture",
      "Use fresh spices for enhanced flavor",
      "Fry bhature until puffed for best results",
      "Serve with pickled onions for a tangy contrast"
    ],
    ingredients: [
      "2 cups chickpeas, soaked overnight",
      "2 cups all-purpose flour",
      "1/4 cup yogurt",
      "1 tsp baking powder",
      "2 large onions, chopped",
      "4 tomatoes, chopped",
      "2 tsp chole masala",
      "1 tsp cumin seeds",
      "1 tsp coriander powder",
      "1/2 tsp turmeric",
      "1 tsp red chili powder",
      "4 cloves garlic, minced",
      "Oil for deep frying",
      "Salt to taste"
    ],
    instructions: [
      "Pressure cook soaked chickpeas until tender, reserve the cooking liquid.",
      "Make bhature dough by mixing flour, yogurt, baking powder, salt, and water. Rest for 2 hours.",
      "Heat oil in a pan, add cumin seeds and onions. Sauté until golden.",
      "Add garlic, tomatoes, and all spices. Cook until tomatoes break down.",
      "Add cooked chickpeas and some cooking liquid. Simmer for 20 minutes.",
      "Roll out bhature dough into circles and deep fry until puffed and golden.",
      "Serve hot chole with fresh bhature, pickled onions, and green chutney."
    ]
  },
  {
    id: 7,
    name: "Rogan Josh",
    image: "photo-1574653879511-c3cd8b12c635",
    imageLink: "https://images.unsplash.com/photo-1574653879511-c3cd8b12c635",
    region: "Jammu & Kashmir",
    cookTime: "90 mins",
    servings: 4,
    difficulty: "Hard",
    description: "Aromatic lamb curry from Kashmir, slow-cooked in yogurt and spices with a rich red color from Kashmiri chilies.",
    videoId: "xmq9xARauag",
    //videoLink: "https://www.youtube.com/watch?v=QzTNhfAKhfA",
    nutrition: {
      calories: 650,
      protein: "40g",
      carbs: "10g",
      fat: "50g"
    },
    cookingTips: [
      "Use fresh Kashmiri chilies for authentic flavor",
      "Marinate lamb for several hours for tenderness",
      "Cook on low heat for deep flavor development",
      "Serve with steamed rice or naan"
    ],
    ingredients: [
      "2 lbs lamb, cut into pieces",
      "1 cup yogurt",
      "4 Kashmiri red chilies",
      "1 tsp ginger-garlic paste",
      "1 tsp fennel powder",
      "1/2 tsp asafoetida",
      "4 green cardamom",
      "2 black cardamom",
      "1 inch cinnamon",
      "4 cloves",
      "2 bay leaves",
      "Salt to taste"
    ],
    instructions: [
      "Marinate lamb with yogurt and salt for 1 hour.",
      "Heat oil and add whole spices.",
      "Add marinated lamb and cook until browned.",
      "Add ground spices and cook on low heat for 1 hour.",
      "Simmer until meat is tender and oil separates.",
      "Garnish with fresh cilantro and serve with rice."
    ]
  },
  {
    id: 8,
    name: "Makki di Roti & Sarson da Saag",
    image: "photo-1578662996442-48f60103fc96",
    imageLink: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    region: "Punjab",
    cookTime: "60 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Traditional Punjabi winter meal of corn flour flatbread served with mustard greens curry and butter.",
    videoId: "JD6nX_uPWg0",
    //videoLink: "https://www.youtube.com/watch?v=zKb0g8OLSqE",
    nutrition: {
      calories: 400,
      protein: "12g",
      carbs: "60g",
      fat: "15g"
    },
    cookingTips: [
      "Use fresh mustard greens for best flavor",
      "Knead the dough well for soft rotis",
      "Cook on a hot griddle for even browning",
      "Serve with a dollop of butter for richness"
    ],
    ingredients: [
      "2 cups corn flour",
      "1 kg mustard greens",
      "200g spinach",
      "4 green chilies",
      "1 inch ginger",
      "4 cloves garlic",
      "2 onions",
      "2 tomatoes",
      "1 tsp cumin seeds",
      "Butter for serving"
    ],
    instructions: [
      "Boil and blend mustard greens with spinach.",
      "Sauté onions, ginger, garlic in oil.",
      "Add pureed greens and cook for 30 minutes.",
      "Make dough with corn flour and water.",
      "Roll into thick rotis and cook on griddle.",
      "Serve hot saag with makki di roti and butter."
    ]
  },
  {
    id: 9,
    name: "Dhokla",
    image: "photo-1612195583950-b8fd34bf0e44",
    imageLink: "https://images.unsplash.com/photo-1612195583950-b8fd34bf0e44",
    region: "Gujarat",
    cookTime: "30 mins",
    servings: 6,
    difficulty: "Easy",
    description: "Steamed savory cake made from fermented chickpea flour batter, light and spongy with a tangy flavor.",
    videoId: "neWq-3uockM",
    //videoLink: "https://www.youtube.com/watch?v=8JVfOPJ8OjY",
    nutrition: {
      calories: 150,
      protein: "5g",
      carbs: "25g",
      fat: "3g"
    },
    cookingTips: [
      "Use fresh chickpea flour for best results",
      "Add a pinch of turmeric for color",
      "Steam until a toothpick comes out clean",
      "Serve with green chutney for added flavor"
    ],
    ingredients: [
      "2 cups chickpea flour",
      "1 cup water",
      "1 tsp ginger-green chili paste",
      "1 tsp lemon juice",
      "1 tsp sugar",
      "1/2 tsp turmeric",
      "Salt to taste",
      "1 tsp eno fruit salt",
      "For tempering: mustard seeds, curry leaves, green chilies"
    ],
    instructions: [
      "Mix chickpea flour with water to make smooth batter.",
      "Add ginger-chili paste, lemon juice, sugar, turmeric, salt.",
      "Just before steaming, add eno and mix gently.",
      "Steam for 15-20 minutes until spongy.",
      "Cut into pieces and temper with mustard seeds.",
      "Garnish with cilantro and serve with chutney."
    ]
  },
  {
    id: 10,
    name: "Laal Maas",
    image: "photo-1574653879628-8e5c13eac195",
    imageLink: "https://images.unsplash.com/photo-1574653879628-8e5c13eac195",
    region: "Rajasthan",
    cookTime: "75 mins",
    servings: 4,
    difficulty: "Hard",
    description: "Fiery red mutton curry from Rajasthan, cooked with Mathania chilies and aromatic spices.",
    videoId: "bG2nwUSWezg",
    //videoLink: "https://www.youtube.com/watch?v=BvjfWQnxEn0",
    nutrition: {
      calories: 700,
      protein: "45g",
      carbs: "5g",
      fat: "60g"
    },
    cookingTips: [
      "Use Mathania chilies for authentic heat",
      "Marinate mutton for several hours for tenderness",
      "Cook on low heat for deep flavor development",
      "Serve with bajra roti or rice"
    ],
    ingredients: [
      "1 kg mutton",
      "20 Mathania red chilies",
      "1 cup yogurt",
      "4 cloves garlic",
      "1 inch ginger",
      "2 onions",
      "1 tsp cumin seeds",
      "4 green cardamom",
      "2 black cardamom",
      "Ghee for cooking"
    ],
    instructions: [
      "Soak red chilies and make paste.",
      "Marinate mutton with yogurt and chili paste.",
      "Heat ghee and add whole spices.",
      "Add marinated mutton and cook until tender.",
      "Simmer for 45 minutes until oil separates.",
      "Serve hot with bajra roti or rice."
    ]
  },
  {
    id: 11,
    name: "Rasgulla",
    image: "photo-1571167893528-e4b73b48d039",
    imageLink: "https://images.unsplash.com/photo-1571167893528-e4b73b48d039",
    region: "West Bengal",
    cookTime: "45 mins",
    servings: 8,
    difficulty: "Medium",
    description: "Spongy cottage cheese balls cooked in sugar syrup, a beloved Bengali sweet dessert.",
    videoId: "c_ZkvfLuCsE",
    //videoLink: "https://www.youtube.com/watch?v=M4n1vTLgmrU",
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "40g",
      fat: "2g"
    },
    cookingTips: [
      "Use full-fat milk for best texture",
      "Knead chenna until smooth for soft rasgullas",
      "Cook in sugar syrup until doubled in size",
      "Chill before serving for best flavor"
    ],
    ingredients: [
      "1 liter full-fat milk",
      "2 tbsp lemon juice",
      "1 cup sugar",
      "4 cups water",
      "1/4 tsp cardamom powder",
      "Few drops rose water"
    ],
    instructions: [
      "Boil milk and add lemon juice to curdle.",
      "Strain and wash the chenna under cold water.",
      "Knead chenna until smooth and make small balls.",
      "Boil sugar and water to make syrup.",
      "Add chenna balls to boiling syrup.",
      "Cook for 15 minutes until doubled in size."
    ]
  },
  {
    id: 12,
    name: "Idli Sambar",
    image: "photo-1589302168068-964664d93dc0",
    imageLink: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    region: "Tamil Nadu",
    cookTime: "40 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Steamed rice cakes served with lentil curry, a staple South Indian breakfast dish.",
    videoId: "3lWb4qBqrms",
    //videoLink: "https://www.youtube.com/watch?v=yXL_MpjHZ1M",
    nutrition: {
      calories: 300,
      protein: "10g",
      carbs: "50g",
      fat: "5g"
    },
    cookingTips: [
      "Use fresh idli batter for best results",
      "Steam in idli molds for even cooking",
      "Serve hot with sambar and chutney",
      "Add vegetables to sambar for extra nutrition"
    ],
    ingredients: [
      "2 cups idli batter",
      "1 cup toor dal",
      "2 tomatoes",
      "1 onion",
      "2 tbsp sambar powder",
      "1 tsp mustard seeds",
      "Curry leaves",
      "Tamarind paste",
      "Vegetables (drumstick, okra)"
    ],
    instructions: [
      "Steam idli batter in idli molds for 12-15 minutes.",
      "Pressure cook toor dal until soft.",
      "Sauté vegetables with onions and tomatoes.",
      "Add cooked dal, sambar powder, and tamarind.",
      "Simmer for 15 minutes until flavors blend.",
      "Serve hot idlis with sambar and chutney."
    ]
  },
  {
    id: 13,
    name: "Fish Curry",
    image: "photo-1565299624946-b28f40a0ca4b",
    imageLink: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b",
    region: "Kerala",
    cookTime: "35 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Coconut-based fish curry with curry leaves and kokum, a signature dish from God's Own Country.",
    videoId: "8oo_oUDdiMY",
    //videoLink: "https://www.youtube.com/watch?v=7JZ7vkwfVE8",
    nutrition: {
      calories: 350,
      protein: "25g",
      carbs: "10g",
      fat: "20g"
    },
    cookingTips: [
      "Use fresh fish for best flavor",
      "Add kokum for authentic taste",
      "Simmer gently to avoid breaking the fish",
      "Serve with steamed rice for a complete meal"
    ],
    ingredients: [
      "500g fish fillets",
      "1 coconut, grated",
      "2 tbsp fish curry powder",
      "1 onion, sliced",
      "4 green chilies",
      "10 curry leaves",
      "2 tomatoes",
      "Kokum or tamarind",
      "Coconut oil"
    ],
    instructions: [
      "Extract thick and thin coconut milk.",
      "Marinate fish with turmeric and salt.",
      "Heat coconut oil and fry fish lightly.",
      "Sauté onions, add curry powder and tomatoes.",
      "Add thin coconut milk and cook for 10 minutes.",
      "Add thick coconut milk and fish, simmer for 5 minutes."
    ]
  },
  {
    id: 14,
    name: "Poha",
    image: "photo-1606491956689-2ea866880c84",
    imageLink: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
    region: "Madhya Pradesh",
    cookTime: "15 mins",
    servings: 2,
    difficulty: "Easy",
    description: "Flattened rice cooked with onions, curry leaves, and spices, a popular breakfast dish from Central India.",
    videoId: "-ttCDDBXX4I",
    //videoLink: "https://www.youtube.com/watch?v=Rb5KrKrWUWI",
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "35g",
      fat: "6g"
    },
    cookingTips: [
      "Rinse poha gently to avoid breaking",
      "Add peanuts for crunch",
      "Serve with lemon juice for tanginess",
      "Garnish with fresh coriander for flavor"
    ],
    ingredients: [
      "2 cups thick poha",
      "1 large onion, chopped",
      "2 green chilies",
      "1 tsp mustard seeds",
      "1 tsp cumin seeds",
      "10 curry leaves",
      "1/4 tsp turmeric",
      "2 tbsp oil",
      "Salt to taste",
      "Lemon juice",
      "Peanuts for garnish"
    ],
    instructions: [
      "Rinse poha gently and drain excess water.",
      "Heat oil, add mustard seeds and cumin seeds.",
      "Add curry leaves, green chilies, and onions.",
      "Sauté until onions are translucent.",
      "Add turmeric, then add drained poha.",
      "Mix gently, add salt and lemon juice. Garnish with peanuts."
    ]
  },
  {
    id: 15,
    name: "Bisi Bele Bath",
    image: "photo-1565299624946-b28f40a0ca4b",
    imageLink: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b",
    region: "Karnataka",
    cookTime: "50 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Spicy rice and lentil dish cooked with vegetables and aromatic spices, a comfort food from Karnataka.",
    videoId: "C0nAdyXDlnk",
    //videoLink: "https://www.youtube.com/watch?v=XzKnpAUoTlY",
    nutrition: {
      calories: 450,
      protein: "15g",
      carbs: "70g",
      fat: "10g"
    },
    cookingTips: [
      "Use fresh vegetables for best flavor",
      "Cook rice and dal together for even texture",
      "Adjust spice levels to taste",
      "Serve hot with ghee for richness"
    ],
    ingredients: [
      "1 cup rice",
      "1/2 cup toor dal",
      "2 tbsp bisi bele bath powder",
      "Mixed vegetables",
      "2 tbsp ghee",
      "1 tsp mustard seeds",
      "Curry leaves",
      "Tamarind paste",
      "Jaggery"
    ],
    instructions: [
      "Cook rice and dal together until soft.",
      "Cook vegetables separately.",
      "Heat ghee, add mustard seeds and curry leaves.",
      "Add bisi bele bath powder and sauté.",
      "Mix cooked rice-dal, vegetables, and tamarind.",
      "Simmer for 15 minutes until well combined."
    ]
  },
  {
    id: 16,
    name: "Aloo Tikki",
    image: "photo-1601050690597-df0568f70950",
    imageLink: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    region: "Uttar Pradesh",
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Easy",
    description: "Crispy potato patties served with chutneys, a popular street food snack from North India.",
    videoId: "RNZ1ouYfjZk",
    //videoLink: "https://www.youtube.com/watch?v=5KvOWYKRKIQ",
    nutrition: {
      calories: 250,
      protein: "5g",
      carbs: "40g",
      fat: "10g"
    },
    cookingTips: [
      "Use boiled potatoes for easy mashing",
      "Add spices to taste for flavor",
      "Fry until golden brown for best texture",
      "Serve with mint and tamarind chutneys"
    ],
    ingredients: [
      "4 large potatoes, boiled",
      "2 green chilies, minced",
      "1 tsp ginger, minced",
      "1/2 tsp red chili powder",
      "1/2 tsp garam masala",
      "2 tbsp cornflour",
      "Salt to taste",
      "Oil for shallow frying",
      "Chutneys for serving"
    ],
    instructions: [
      "Mash boiled potatoes until smooth.",
      "Add green chilies, ginger, spices, and cornflour.",
      "Mix well and form into round patties.",
      "Heat oil in a pan for shallow frying.",
      "Fry tikkis until golden brown on both sides.",
      "Serve hot with mint and tamarind chutneys."
    ]
  },
  {
    id: 17,
    name: "Sandesh",
    image: "photo-1571167893528-e4b73b48d039",
    imageLink: "https://images.unsplash.com/photo-1571167893528-e4b73b48d039",
    region: "West Bengal",
    cookTime: "25 mins",
    servings: 6,
    difficulty: "Medium",
    description: "Delicate cottage cheese sweet from Bengal, often flavored with cardamom or saffron.",
    videoId: "dzLGwVD1piM",
    //videoLink: "https://www.youtube.com/watch?v=J8zl5JIUP0E",
    nutrition: {
      calories: 180,
      protein: "6g",
      carbs: "30g",
      fat: "4g"
    },
    cookingTips: [
      "Use fresh chenna for best results",
      "Knead well for smooth texture",
      "Shape into desired forms for presentation",
      "Chill before serving for enhanced flavor"
    ],
    ingredients: [
      "1 liter full-fat milk",
      "2 tbsp lemon juice",
      "1/2 cup powdered sugar",
      "1/4 tsp cardamom powder",
      "Few saffron strands",
      "Pistachios for garnish"
    ],
    instructions: [
      "Curdle milk with lemon juice and strain.",
      "Wash chenna under cold water and squeeze dry.",
      "Cook chenna on low heat for 8-10 minutes.",
      "Add sugar and cardamom, cook until thick.",
      "Shape into desired forms and garnish.",
      "Chill before serving."
    ]
  },
  {
    id: 18,
    name: "Misal Pav",
    image: "photo-1606491956689-2ea866880c84",
    imageLink: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
    region: "Maharashtra",
    cookTime: "45 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Spicy sprouted moth bean curry topped with farsan, served with bread rolls.",
    videoId: "mei7469hFLA",
    //videoLink: "https://www.youtube.com/watch?v=tJ9Rk4cxKqo",
    nutrition: {
      calories: 400,
      protein: "15g",
      carbs: "60g",
      fat: "10g"
    },
    cookingTips: [
      "Use fresh sprouts for best flavor",
      "Top with farsan for crunch",
      "Serve with buttered pav for richness",
      "Adjust spice levels to taste"
    ],
    ingredients: [
      "2 cups sprouted moth beans",
      "8 pav (bread rolls)",
      "2 onions, chopped",
      "2 tomatoes, chopped",
      "2 tbsp misal masala",
      "1 tsp ginger-garlic paste",
      "Farsan (mixture) for topping",
      "Chopped onions and cilantro"
    ],
    instructions: [
      "Pressure cook sprouted beans until tender.",
      "Sauté onions until golden, add ginger-garlic paste.",
      "Add tomatoes and misal masala, cook well.",
      "Add cooked beans and simmer for 15 minutes.",
      "Serve hot topped with farsan and raw onions.",
      "Accompany with buttered pav and lime wedges."
    ]
  },
  {
    id: 19,
    name: "Ghevar",
    image: "photo-1571167896368-bd872c3b85a0",
    imageLink: "https://images.unsplash.com/photo-1571167896368-bd872c3b85a0",
    region: "Rajasthan",
    cookTime: "40 mins",
    servings: 8,
    difficulty: "Hard",
    description: "Traditional Rajasthani sweet with honeycomb texture, soaked in sugar syrup and topped with cream.",
    videoId: "DvbMlp5c9V0",
    //videoLink: "https://www.youtube.com/watch?v=dJ4k6TnzT0w",
    nutrition: {
      calories: 300,
      protein: "4g",
      carbs: "50g",
      fat: "12g"
    },
    cookingTips: [
      "Use ice-cold water for better texture",
      "Fry until golden for best results",
      "Soak in sugar syrup while hot",
      "Top with rabri and nuts before serving"
    ],
    ingredients: [
      "2 cups all-purpose flour",
      "1/4 cup ghee",
      "Ice cold water",
      "2 cups sugar",
      "1 cup water for syrup",
      "1/2 cup milk",
      "Almonds and pistachios"
    ],
    instructions: [
      "Make thin batter with flour, ghee, and ice water.",
      "Heat ghee in a deep pan for deep frying.",
      "Pour batter in thin stream to form lace pattern.",
      "Fry until crispy and golden.",
      "Soak in sugar syrup while hot.",
      "Top with rabri and nuts before serving."
    ]
  },
  {
    id: 20,
    name: "Aloo Paratha",
    image: "photo-1578662996442-48f60103fc96",
    imageLink: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    region: "Punjab",
    cookTime: "35 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Stuffed flatbread with spiced potato filling, served with yogurt and pickle.",
    videoId: "IuPnAjnRdGc",
    //videoLink: "https://www.youtube.com/watch?v=bCsG5dLCZWE",
    nutrition: {
      calories: 350,
      protein: "10g",
      carbs: "50g",
      fat: "15g"
    },
    cookingTips: [
      "Use boiled potatoes for easy mashing",
      "Add spices to taste for flavor",
      "Cook on a hot griddle for even browning",
      "Serve with yogurt, butter, and pickle"
    ],
    ingredients: [
      "2 cups wheat flour",
      "4 large potatoes, boiled",
      "2 green chilies, minced",
      "1 tsp ginger, minced",
      "1 tsp cumin seeds",
      "1/2 tsp red chili powder",
      "1/2 tsp garam masala",
      "Fresh cilantro",
      "Ghee for cooking"
    ],
    instructions: [
      "Make soft dough with flour and water.",
      "Mash potatoes and mix with spices and herbs.",
      "Roll out dough, place filling, and seal edges.",
      "Roll gently to flatten the stuffed paratha.",
      "Cook on hot griddle with ghee until golden.",
      "Serve hot with yogurt, butter, and pickle."
    ]
  },
  {
    id: 21,
    name: "Appam",
    image: "photo-1589302168068-964664d93dc0",
    imageLink: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    region: "Kerala",
    cookTime: "25 mins",
    servings: 6,
    difficulty: "Medium",
    description: "Fermented rice pancakes with soft center and crispy edges, served with stew or curry.",
    videoId: "METruOPZ-2Y",
    //videoLink: "https://www.youtube.com/watch?v=qJy8DTCY_1Y",
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "35g",
      fat: "6g"
    },
    cookingTips: [
      "Soak rice for 4 hours for better fermentation",
      "Use a non-stick pan for easy cooking",
      "Serve with coconut milk or vegetable stew",
      "Adjust thickness of batter for desired texture"
    ],
    ingredients: [
      "2 cups raw rice",
      "1/2 cup cooked rice",
      "1/2 cup coconut, grated",
      "1 tsp dry yeast",
      "1 tsp sugar",
      "Salt to taste",
      "Coconut milk"
    ],
    instructions: [
      "Soak rice for 4 hours, then grind with coconut.",
      "Add cooked rice and blend to smooth batter.",
      "Mix yeast with sugar and add to batter.",
      "Ferment overnight until bubbly.",
      "Cook in appam pan until edges are crispy.",
      "Serve with coconut milk or vegetable stew."
    ]
  },
  {
    id: 22,
    name: "Thukpa",
    image: "photo-1565299624946-b28f40a0ca4b",
    imageLink: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b",
    region: "Sikkim",
    cookTime: "35 mins",
    servings: 4,
    difficulty: "Easy",
    description: "Tibetan noodle soup with vegetables and meat, perfect for cold mountain weather.",
    videoId: "WxkFc-o6Tjg",
    //videoLink: "https://www.youtube.com/watch?v=8jWRhPFhNJI",
    nutrition: {
      calories: 300,
      protein: "15g",
      carbs: "40g",
      fat: "10g"
    },
    cookingTips: [
      "Use fresh vegetables for best flavor",
      "Adjust spice levels to taste",
      "Serve hot for best experience",
      "Add herbs for extra freshness"
    ],
    ingredients: [
      "200g wheat noodles",
      "200g chicken or vegetables",
      "1 onion, sliced",
      "2 carrots, julienned",
      "1 cabbage, shredded",
      "4 cups chicken stock",
      "2 cloves garlic",
      "1 inch ginger",
      "Soy sauce and salt"
    ],
    instructions: [
      "Boil noodles until al dente and set aside.",
      "Sauté onions, garlic, and ginger.",
      "Add chicken/vegetables and cook until done.",
      "Add vegetables and stir-fry briefly.",
      "Pour stock and bring to boil.",
      "Add cooked noodles and season with soy sauce."
    ]
  },
  {
    id: 23,
    name: "Bamboo Shoot Curry",
    image: "photo-1565299624946-b28f40a0ca4b",
    imageLink: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b",
    region: "Assam",
    cookTime: "40 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Traditional Assamese curry made with tender bamboo shoots and fish or meat.",
    videoId: "84KuN45RLSM",
    //videoLink: "https://www.youtube.com/watch?v=rQ8l7VNXxPE",
    nutrition: {
      calories: 250,
      protein: "15g",
      carbs: "30g",
      fat: "8g"
    },
    cookingTips: [
      "Use fresh bamboo shoots for best flavor",
      "Adjust spice levels to taste",
      "Serve with steamed rice for a complete meal",
      "Add herbs for extra freshness"
    ],
    ingredients: [
      "500g bamboo shoots",
      "300g fish or pork",
      "2 onions, chopped",
      "4 green chilies",
      "1 tsp ginger-garlic paste",
      "1 tsp turmeric",
      "Mustard oil",
      "Salt to taste"
    ],
    instructions: [
      "Clean and chop bamboo shoots, boil until tender.",
      "Heat mustard oil and fry fish/meat until golden.",
      "Sauté onions until brown, add ginger-garlic paste.",
      "Add bamboo shoots and mix well.",
      "Add fried fish/meat and simmer for 15 minutes.",
      "Season with salt and serve with rice."
    ]
  },
  {
    id: 24,
    name: "Pakhala Bhata",
    image: "photo-1565299624946-b28f40a0ca4b",
    imageLink: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b",
    region: "Odisha",
    cookTime: "15 mins",
    servings: 4,
    difficulty: "Easy",
    description: "Fermented rice dish served with fried vegetables, a cooling summer meal from Odisha.",
    videoId: "lqJEaM1ltpc",
    //videoLink: "https://www.youtube.com/watch?v=wNOxTgJfFzs",
    nutrition: {
      calories: 180,
      protein: "4g",
      carbs: "30g",
      fat: "2g"
    },
    cookingTips: [
      "Soak cooked rice in water overnight for fermentation",
      "Serve chilled for best flavor",
      "Add fried vegetables for texture",
      "Can be served with yogurt on the side"
    ],
    ingredients: [
      "2 cups cooked rice",
      "4 cups water",
      "Salt to taste",
      "1 tsp mustard seeds",
      "Curry leaves",
      "Green chilies",
      "Fried vegetables for serving",
      "Yogurt (optional)"
    ],
    instructions: [
      "Soak cooked rice in water overnight.",
      "Add salt and mix gently.",
      "Heat oil, add mustard seeds and curry leaves.",
      "Pour tempering over rice water.",
      "Serve chilled with fried vegetables.",
      "Can be served with yogurt on the side."
    ]
  },
  {
    id: 25,
    name: "Jadoh",
    image: "photo-1565299624946-b28f40a0ca4b",
    imageLink: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b",
    region: "Meghalaya",
    cookTime: "45 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Khasi red rice dish cooked with pork and black sesame, a tribal delicacy from Northeast India.",
    videoId: "kbf8bESSZOA",
    //videoLink: "https://www.youtube.com/watch?v=yPl2gDWZHEU",
    nutrition: {
      calories: 500,
      protein: "30g",
      carbs: "60g",
      fat: "15g"
    },
    cookingTips: [
      "Use fresh red rice for best flavor",
      "Dry roast black sesame seeds for aroma",
      "Cook pork until tender for best results",
      "Serve hot with boiled vegetables"
    ],
    ingredients: [
      "2 cups red rice",
      "500g pork, cubed",
      "2 tbsp black sesame seeds",
      "4 onions, chopped",
      "4 green chilies",
      "1 tsp ginger-garlic paste",
      "Turmeric and red chili powder",
      "Mustard oil"
    ],
    instructions: [
      "Wash red rice and soak for 30 minutes.",
      "Dry roast black sesame seeds and powder.",
      "Cook pork with onions and spices until tender.",
      "Add rice and enough water to cook.",
      "Mix in sesame powder and cook until rice is done.",
      "Serve hot with boiled vegetables."
    ]
  }
];
