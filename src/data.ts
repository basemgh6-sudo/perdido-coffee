import { Product, ProductType, RoastLevel, BrewingMethod } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'v60-starter-set',
    name: 'Perdido V60 Starter Set',
    type: ProductType.V60_SET,
    price: 189,
    label: 'Best Seller',
    description: 'Everything you need to start brewing clean, premium V60 coffee at home. This kit is carefully curated for beginners who want to experience the true clarity of specialty coffee rituals.',
    shortDescription: 'The perfect entry point to specialty coffee.',
    images: ['https://picsum.photos/seed/v60-kit/800/600'],
    includes: [
      'V60 dripper (Ceramic)',
      'Glass coffee server (600ml)',
      'Pack of 40 paper filters',
      'Wooden measuring scoop',
      '250g Perdido House Blend beans',
      'Beginner brewing guide'
    ],
    bestFor: [BrewingMethod.V60],
    featured: true,
  },
  {
    id: 'house-blend',
    name: 'Perdido House Blend',
    type: ProductType.COFFEE_BEANS,
    price: 49,
    size: '250g',
    roast: RoastLevel.MEDIUM,
    origin: 'Brazil / Colombia',
    notes: ['Chocolate', 'Roasted Nuts', 'Caramel'],
    bestFor: [BrewingMethod.ESPRESSO, BrewingMethod.V60, BrewingMethod.FRENCH_PRESS],
    description: 'Smooth, warm, and balanced. A daily coffee blend made for comfort, clarity, and rich aroma. Perfect for those who enjoy a reliable and full-bodied cup every morning.',
    images: ['https://picsum.photos/seed/coffee-house/800/600'],
    featured: true,
  },
  {
    id: 'lost-origin-ethiopia',
    name: 'Lost Origin Ethiopia',
    type: ProductType.COFFEE_BEANS,
    price: 59,
    size: '250g',
    roast: RoastLevel.LIGHT_MEDIUM,
    origin: 'Ethiopia (Yirgacheffe)',
    notes: ['Berries', 'Jasmine', 'Citrus'],
    bestFor: [BrewingMethod.V60, BrewingMethod.COLD_BREW],
    description: 'A bright and expressive coffee with floral aroma, soft fruit notes, and a clean finish. This light-medium roast showcases the delicate terroir of the Yirgacheffe region.',
    images: ['https://picsum.photos/seed/coffee-ethiopia/800/600'],
  },
  {
    id: 'midnight-colombia',
    name: 'Midnight Colombia',
    type: ProductType.COFFEE_BEANS,
    price: 55,
    size: '250g',
    roast: RoastLevel.MEDIUM_DARK,
    origin: 'Colombia (Huila)',
    notes: ['Dark Chocolate', 'Brown Sugar', 'Red Fruit'],
    bestFor: [BrewingMethod.ESPRESSO, BrewingMethod.FRENCH_PRESS],
    description: 'Deep, smooth, and rich. Built for people who like bold coffee without bitterness. A sophisticated medium-dark roast with heavy sweetness.',
    images: ['https://picsum.photos/seed/coffee-colombia/800/600'],
  },
  {
    id: 'desert-bloom',
    name: 'Desert Bloom',
    type: ProductType.COFFEE_BEANS,
    price: 62,
    size: '250g',
    roast: RoastLevel.LIGHT,
    origin: 'Yemen / Ethiopia Inspired',
    notes: ['Floral', 'Honey', 'Peach'],
    bestFor: [BrewingMethod.V60],
    description: 'A light and elegant cup with floral sweetness and a soft honey-like finish. Inspired by the high-altitude profiles found in ancient coffee gardens.',
    images: ['https://picsum.photos/seed/coffee-yemen/800/600'],
  },
  {
    id: 'discovery-box',
    name: 'Perdido Coffee Discovery Box',
    type: ProductType.BUNDLE,
    price: 149,
    label: 'Best Value',
    description: 'Explore three different Perdido coffees and find your favorite ritual. A curated selection of our finest roasts.',
    includes: [
      '3 x 100g Coffee Bags',
      'Different roast levels included',
      'Tasting cards for each origin',
      'Brewing recommendation sheet'
    ],
    images: ['https://picsum.photos/seed/coffee-bundle-1/800/600'],
    featured: true,
  },
  {
    id: 'v60-ritual-bundle',
    name: 'V60 Ritual Bundle',
    type: ProductType.BUNDLE,
    price: 249,
    label: 'Beginner Friendly',
    description: 'The complete home brewing bundle for anyone ready to start better coffee rituals. Includes everything in the starter set plus extra variety.',
    includes: [
      'Full V60 Starter Set',
      '2 x 250g Specialty Coffee Bags',
      'Extra 100pk Filters',
      'Detailed Brewing Guidebook'
    ],
    images: ['https://picsum.photos/seed/coffee-bundle-2/800/600'],
  },
  {
    id: 'gift-box',
    name: 'Perdido Gift Box',
    type: ProductType.BUNDLE,
    price: 199,
    label: 'Gift Ready',
    description: 'A premium coffee gift for people who appreciate slow mornings and beautiful rituals. Elegantly packaged and ready to give.',
    includes: [
      'Premium Custom Gift Box',
      '2 x 250g Selection Beans',
      'Perdido Tasting Journal',
      'Optional Handwritten Message'
    ],
    images: ['https://picsum.photos/seed/coffee-gift/800/600'],
  }
];

export const REVIEWS = [
  {
    id: '1',
    userName: 'Ahmed S.',
    rating: 5,
    comment: 'The V60 set made brewing at home simple and enjoyable. Highly recommended!',
    date: 'Dec 12, 2024'
  },
  {
    id: '2',
    userName: 'Layla M.',
    rating: 5,
    comment: 'The beans taste fresh, clean, and premium. The Lost Origin Ethiopia is amazing.',
    date: 'Jan 5, 2025'
  },
  {
    id: '3',
    userName: 'Khalid F.',
    rating: 5,
    comment: 'The packaging feels like a gift. Perfect for coffee lovers in Riyadh.',
    date: 'Feb 14, 2025'
  }
];
