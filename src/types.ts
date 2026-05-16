export enum RoastLevel {
  LIGHT = 'Light',
  LIGHT_MEDIUM = 'Light-Medium',
  MEDIUM = 'Medium',
  MEDIUM_DARK = 'Medium-Dark',
  DARK = 'Dark',
}

export enum ProductType {
  V60_SET = 'V60 Set',
  COFFEE_BEANS = 'Coffee Beans',
  BUNDLE = 'Bundle',
  ACCESSORIES = 'Accessories',
}

export enum BrewingMethod {
  V60 = 'V60',
  ESPRESSO = 'Espresso',
  COLD_BREW = 'Cold Brew',
  FRENCH_PRESS = 'French Press',
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  type: ProductType;
  price: number;
  description: string;
  shortDescription?: string;
  images: string[];
  label?: string;
  roast?: RoastLevel;
  origin?: string;
  notes?: string[];
  bestFor?: BrewingMethod[];
  includes?: string[];
  size?: string;
  processing?: string;
  reviews?: Review[];
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedGrind?: string;
}
