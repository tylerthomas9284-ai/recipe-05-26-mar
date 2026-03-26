const recipes = [
  {
    id: "garlic-butter-chicken",
    title: "Garlic Butter Chicken",
    image: "https://images.unsplash.com/photo-1653543362907-b9e87d2be5db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJsaWMlMjBidXR0ZXIlMjBjaGlja2VuJTIwZGlubmVyfGVufDF8fHx8MTc3Mzg1NzU1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    cookTime: "30 mins",
    prepTime: "10 mins",
    totalTime: "40 mins",
    calories: 425,
    servings: 4,
    difficulty: "Easy",
    category: ["Dinner Ideas", "High-Protein Meals"],
    rating: 4.8,
    description: "Tender, juicy chicken breasts cooked in a rich garlic butter sauce. Perfect for a quick weeknight dinner.",
    ingredients: [
      "4 chicken breasts",
      "4 tbsp butter",
      "6 cloves garlic, minced",
      "1 cup chicken broth",
      "1/2 cup heavy cream",
      "1 tsp Italian seasoning",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Season chicken breasts with salt, pepper, and Italian seasoning.",
      "Heat 2 tbsp butter in a large skillet over medium-high heat.",
      "Cook chicken for 6-7 minutes per side until golden and cooked through. Remove and set aside.",
      "In the same pan, add remaining butter and minced garlic. Cook for 1 minute.",
      "Add chicken broth and bring to a simmer, scraping up browned bits.",
      "Stir in heavy cream and let sauce thicken for 2-3 minutes.",
      "Return chicken to the pan and coat with sauce.",
      "Garnish with fresh parsley and serve immediately."
    ],
    nutrition: {
      calories: 425,
      protein: "42g",
      carbs: "6g",
      fat: "24g"
    }
  },
  {
    id: "creamy-alfredo-pasta",
    title: "Creamy Alfredo Pasta",
    image: "https://images.unsplash.com/photo-1760390952135-12da7267ff8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhbXklMjBhbGZyZWRvJTIwcGFzdGElMjBwbGF0ZXxlbnwxfHx8fDE3NzM4NTc1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    cookTime: "25 mins",
    prepTime: "5 mins",
    totalTime: "30 mins",
    calories: 520,
    servings: 4,
    difficulty: "Easy",
    category: ["Dinner Ideas", "Quick Meals"],
    rating: 4.7,
    description: "Classic creamy Alfredo pasta that's better than any restaurant version. Rich, indulgent, and ready in under 30 minutes.",
    ingredients: [
      "1 lb fettuccine pasta",
      "1/2 cup butter",
      "2 cups heavy cream",
      "2 cups grated Parmesan cheese",
      "4 cloves garlic, minced",
      "Salt and pepper to taste",
      "Fresh parsley, chopped"
    ],
    instructions: [
      "Cook fettuccine according to package directions. Reserve 1 cup pasta water.",
      "In a large skillet, melt butter over medium heat.",
      "Add minced garlic and cook for 1 minute until fragrant.",
      "Pour in heavy cream and bring to a gentle simmer.",
      "Reduce heat and stir in Parmesan cheese until melted and smooth.",
      "Add cooked pasta to the sauce, tossing to coat. Add pasta water if needed to thin.",
      "Season with salt and pepper.",
      "Garnish with fresh parsley and extra Parmesan. Serve immediately."
    ],
    nutrition: {
      calories: 520,
      protein: "18g",
      carbs: "48g",
      fat: "28g"
    }
  },
  {
    id: "chocolate-lava-cake",
    title: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1673551490243-f29547426841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBsYXZhJTIwY2FrZSUyMGRlc3NlcnR8ZW58MXx8fHwxNzczODQ2NjAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    cookTime: "20 mins",
    prepTime: "15 mins",
    totalTime: "35 mins",
    calories: 385,
    servings: 4,
    difficulty: "Medium",
    category: ["Desserts"],
    rating: 4.9,
    description: "Decadent individual chocolate cakes with a molten chocolate center. Perfect for impressing dinner guests!",
    ingredients: [
      "1/2 cup butter",
      "4 oz dark chocolate",
      "2 eggs",
      "2 egg yolks",
      "1/4 cup sugar",
      "2 tbsp flour",
      "Butter and cocoa powder for ramekins",
      "Vanilla ice cream (optional)"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Butter four 6-oz ramekins and dust with cocoa powder.",
      "Melt butter and chocolate together in a microwave or double boiler. Stir until smooth.",
      "In a bowl, whisk eggs, egg yolks, and sugar until thick and pale.",
      "Fold melted chocolate into egg mixture.",
      "Gently fold in flour until just combined.",
      "Divide batter among prepared ramekins.",
      "Bake for 12-14 minutes until edges are firm but center is still soft.",
      "Let cool for 1 minute, then invert onto plates. Serve with ice cream."
    ],
    nutrition: {
      calories: 385,
      protein: "8g",
      carbs: "32g",
      fat: "26g"
    }
  },
  {
    id: "avocado-toast-deluxe",
    title: "Avocado Toast Deluxe",
    image: "https://images.unsplash.com/photo-1676471970358-1cff04452e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBlZ2clMjBicmVha2Zhc3R8ZW58MXx8fHwxNzczODU3NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    cookTime: "10 mins",
    prepTime: "5 mins",
    totalTime: "15 mins",
    calories: 320,
    servings: 2,
    difficulty: "Easy",
    category: ["Quick Meals", "Healthy Recipes"],
    rating: 4.6,
    description: "Elevated avocado toast with perfectly poached eggs, cherry tomatoes, and a drizzle of balsamic glaze.",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "2 eggs",
      "1/2 cup cherry tomatoes, halved",
      "1 tbsp lemon juice",
      "Red pepper flakes",
      "Salt and pepper to taste",
      "Balsamic glaze",
      "Fresh microgreens"
    ],
    instructions: [
      "Toast bread slices until golden and crispy.",
      "Mash avocado with lemon juice, salt, and pepper.",
      "Poach eggs in simmering water with a splash of vinegar for 3-4 minutes.",
      "Spread mashed avocado generously on toasted bread.",
      "Top with cherry tomatoes.",
      "Place poached egg on top of each toast.",
      "Season with salt, pepper, and red pepper flakes.",
      "Drizzle with balsamic glaze and garnish with microgreens."
    ],
    nutrition: {
      calories: 320,
      protein: "14g",
      carbs: "28g",
      fat: "18g"
    }
  },
  {
    id: "healthy-buddha-bowl",
    title: "Healthy Buddha Bowl",
    image: "https://images.unsplash.com/photo-1605034298551-baacf17591d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGhlYWx0aHklMjBzYWxhZCUyMGJvd2x8ZW58MXx8fHwxNzczNzg3NjY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    cookTime: "25 mins",
    prepTime: "15 mins",
    totalTime: "40 mins",
    calories: 385,
    servings: 2,
    difficulty: "Easy",
    category: ["Healthy Recipes"],
    rating: 4.8,
    description: "Colorful, nutrient-packed bowl with quinoa, roasted vegetables, and tahini dressing.",
    ingredients: [
      "1 cup quinoa",
      "1 sweet potato, cubed",
      "1 cup chickpeas",
      "2 cups kale, chopped",
      "1 avocado, sliced",
      "1/4 cup tahini",
      "2 tbsp lemon juice",
      "Olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Cook quinoa according to package directions.",
      "Toss sweet potato and chickpeas with olive oil, salt, and pepper. Roast for 20 minutes.",
      "Massage kale with a bit of olive oil until tender.",
      "Make dressing by whisking tahini, lemon juice, and water until smooth.",
      "Assemble bowls with quinoa, roasted vegetables, kale, and avocado.",
      "Drizzle with tahini dressing and serve."
    ],
    nutrition: {
      calories: 385,
      protein: "16g",
      carbs: "52g",
      fat: "14g"
    }
  },
  {
    id: "grilled-steak-protein",
    title: "Grilled Steak with Vegetables",
    image: "https://images.unsplash.com/photo-1760462898692-a3d8c077ddd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBwcm90ZWluJTIwbWVhbHxlbnwxfHx8fDE3NzM4NTc1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    cookTime: "20 mins",
    prepTime: "10 mins",
    totalTime: "30 mins",
    calories: 485,
    servings: 2,
    difficulty: "Medium",
    category: ["High-Protein Meals", "Dinner Ideas"],
    rating: 4.9,
    description: "Perfectly grilled ribeye steak with seasoned roasted vegetables for a protein-packed meal.",
    ingredients: [
      "2 ribeye steaks (8 oz each)",
      "2 cups mixed vegetables (bell peppers, zucchini, onions)",
      "3 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 tsp rosemary",
      "Salt and black pepper",
      "Butter for finishing"
    ],
    instructions: [
      "Remove steaks from fridge 30 minutes before cooking. Pat dry and season generously with salt and pepper.",
      "Preheat grill or cast iron skillet to high heat.",
      "Toss vegetables with olive oil, garlic, rosemary, salt, and pepper.",
      "Grill steaks for 4-5 minutes per side for medium-rare.",
      "While steaks rest, grill vegetables until charred and tender.",
      "Top steaks with a pat of butter before serving.",
      "Serve steaks with grilled vegetables."
    ],
    nutrition: {
      calories: 485,
      protein: "52g",
      carbs: "12g",
      fat: "26g"
    }
  },
  {
    id: "club-sandwich",
    title: "Classic Club Sandwich",
    image: "https://images.unsplash.com/photo-1616174900332-1264408cf779?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWljayUyMHNhbmR3aWNoJTIwbHVuY2h8ZW58MXx8fHwxNzczODU3NTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    cookTime: "15 mins",
    prepTime: "10 mins",
    totalTime: "25 mins",
    calories: 420,
    servings: 2,
    difficulty: "Easy",
    category: ["Quick Meals"],
    rating: 4.5,
    description: "Triple-decker club sandwich loaded with turkey, bacon, lettuce, tomato, and mayo.",
    ingredients: [
      "9 slices bread, toasted",
      "8 oz sliced turkey",
      "8 slices bacon, cooked",
      "4 lettuce leaves",
      "2 tomatoes, sliced",
      "4 slices cheese",
      "Mayonnaise",
      "Mustard"
    ],
    instructions: [
      "Toast all bread slices until golden.",
      "Cook bacon until crispy and drain on paper towels.",
      "Spread mayo on one side of each toast slice.",
      "Layer first slice with turkey, cheese, and lettuce.",
      "Add second slice, spread with mayo.",
      "Add bacon, tomato, and more lettuce.",
      "Top with third slice, mayo side down.",
      "Secure with toothpicks and cut into quarters."
    ],
    nutrition: {
      calories: 420,
      protein: "32g",
      carbs: "38g",
      fat: "16g"
    }
  },
  {
    id: "strawberry-cake",
    title: "Fresh Strawberry Cake",
    image: "https://images.unsplash.com/photo-1612452556661-c36c39c4a128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwY2FrZSUyMGRlc3NlcnR8ZW58MXx8fHwxNzczNzMxNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    cookTime: "35 mins",
    prepTime: "20 mins",
    totalTime: "55 mins",
    calories: 340,
    servings: 12,
    difficulty: "Medium",
    category: ["Desserts"],
    rating: 4.7,
    description: "Light and fluffy strawberry cake topped with fresh strawberries and whipped cream frosting.",
    ingredients: [
      "2 cups all-purpose flour",
      "1 1/2 cups sugar",
      "1/2 cup butter, softened",
      "3 eggs",
      "1 cup milk",
      "2 tsp baking powder",
      "1 tsp vanilla extract",
      "2 cups fresh strawberries",
      "2 cups heavy cream for frosting",
      "1/4 cup powdered sugar"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Grease and flour two 9-inch cake pans.",
      "Cream butter and sugar until light and fluffy.",
      "Beat in eggs one at a time, then add vanilla.",
      "Mix flour and baking powder. Alternately add with milk to butter mixture.",
      "Divide batter between pans and bake for 30-35 minutes.",
      "Cool completely before frosting.",
      "Whip cream with powdered sugar until stiff peaks form.",
      "Layer cakes with whipped cream and sliced strawberries.",
      "Frost entire cake and top with fresh strawberries."
    ],
    nutrition: {
      calories: 340,
      protein: "5g",
      carbs: "42g",
      fat: "16g"
    }
  }
];

// Add more recipes
recipes.push(
  {
    id: "baked-salmon",
    title: "Baked Salmon with Herbs",
    image: "https://images.unsplash.com/photo-1613293984606-b797e2c48842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBkaW5uZXIlMjBwbGF0ZXxlbnwxfHx8fDE3NzM4MDMyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    cookTime: "20 mins",
    prepTime: "10 mins",
    totalTime: "30 mins",
    calories: 340,
    servings: 4,
    difficulty: "Easy",
    category: ["Healthy Recipes", "Dinner Ideas", "High-Protein Meals"],
    rating: 4.9,
    description: "Perfectly baked salmon with fresh herbs, lemon, and garlic. A healthy and delicious dinner option.",
    ingredients: [
      "4 salmon fillets (6 oz each)",
      "3 tbsp olive oil",
      "4 cloves garlic, minced",
      "2 tbsp fresh dill, chopped",
      "2 tbsp fresh parsley, chopped",
      "1 lemon, sliced",
      "Salt and pepper to taste",
      "Cherry tomatoes for serving"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Place salmon fillets on a parchment-lined baking sheet.",
      "Mix olive oil, garlic, dill, and parsley in a small bowl.",
      "Brush herb mixture generously over salmon.",
      "Season with salt and pepper.",
      "Top with lemon slices.",
      "Bake for 15-20 minutes until salmon flakes easily with a fork.",
      "Serve with roasted vegetables or rice."
    ],
    nutrition: {
      calories: 340,
      protein: "38g",
      carbs: "2g",
      fat: "20g"
    }
  },
  {
    id: "beef-tacos",
    title: "Beef Tacos with Fresh Salsa",
    image: "https://images.unsplash.com/photo-1707604341704-74abdc25e52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMG1leGljYW4lMjBmb29kfGVufDF8fHx8MTc3Mzg1MzExMnww&ixlib=rb-4.1.0&q=80&w=1080",
    cookTime: "20 mins",
    prepTime: "15 mins",
    totalTime: "35 mins",
    calories: 380,
    servings: 4,
    difficulty: "Easy",
    category: ["Quick Meals", "Dinner Ideas"],
    rating: 4.8,
    description: "Flavorful seasoned beef tacos topped with fresh homemade salsa, lettuce, and cheese.",
    ingredients: [
      "1 lb ground beef",
      "8 taco shells",
      "2 tsp cumin",
      "2 tsp chili powder",
      "1 tsp paprika",
      "3 tomatoes, diced",
      "1 onion, diced",
      "1 jalapeño, minced",
      "2 cups shredded lettuce",
      "1 cup shredded cheese",
      "Sour cream and cilantro for serving"
    ],
    instructions: [
      "Cook ground beef in a large skillet over medium-high heat until browned.",
      "Drain excess fat and add cumin, chili powder, paprika, salt, and pepper.",
      "Stir and cook for 2-3 minutes.",
      "Make salsa by combining tomatoes, half the onion, jalapeño, cilantro, lime juice, and salt.",
      "Warm taco shells according to package directions.",
      "Fill shells with seasoned beef.",
      "Top with fresh salsa, lettuce, cheese, and sour cream.",
      "Serve immediately with lime wedges."
    ],
    nutrition: {
      calories: 380,
      protein: "28g",
      carbs: "32g",
      fat: "16g"
    }
  }
);
