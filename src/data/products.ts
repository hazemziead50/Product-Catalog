import beefSteakImg from '@/assets/images/red Meat/Stake-meat.webp';
import lambShoulderImg from '@/assets/images/red Meat/Lamb-shoulder.webp';
import groundBeefImg from '@/assets/images/red Meat/meat1.webp';
import lambRibsImg from "@/assets/images/red Meat/Lamb's-beard.webp";

import salmonImg from '@/assets/images/Fish/salmon.webp';
import seaBreamImg from '@/assets/images/Fish/danes.jpg';
import shrimpImg from '@/assets/images/Fish/jampary.jpg';
import bacalhauImg from '@/assets/images/Fish/bakala.jpg';

import chickenBreastImg from '@/assets/images/white Meat/Chicken-breast.jpg';
import wholeChickenImg from '@/assets/images/white Meat/Chicken.jpg';
import chickenThighImg from '@/assets/images/white Meat/Chicken-thigh.jpeg';
import turkeyBreastImg from '@/assets/images/white Meat/Habashi-Chest.jpg';

import type { Product } from "@/types/product";

export const products: Product[] = [
  // Red Meat
  { id: 1, name: "لحم بقري ستيك",  price: 85,  category: "red-meat",   rating: 4.8, available: true,  image: beefSteakImg },
  { id: 2, name: "لحم ضأن (كتف)",   price: 95,  category: "red-meat",   rating: 4.6, available: true,  image: lambShoulderImg },
  { id: 3, name: "لحم بقري مفروم", price: 60,  category: "red-meat",   rating: 4.4, available: true,  image: groundBeefImg },
  { id: 4, name: "ريش غنم",         price: 110, category: "red-meat",   rating: 4.9, available: false, image: lambRibsImg },

  // Fish
  { id: 5, name: "سلمون طازج",      price: 120, category: "fish",       rating: 4.7, available: true,  image: salmonImg },
  { id: 6, name: "سمك دنيس",        price: 70,  category: "fish",       rating: 4.5, available: true,  image: seaBreamImg },
  { id: 7, name: "جمبري",            price: 130, category: "fish",       rating: 4.6, available: false, image: shrimpImg },
  { id: 8, name: "بكلا",             price: 75,  category: "fish",       rating: 4.3, available: true,  image: bacalhauImg },

  // White Meat
  { id: 9,  name: "صدر دجاج",       price: 35, category: "white-meat", rating: 4.5, available: true,  image: chickenBreastImg },
  { id: 10, name: "دجاج كامل",       price: 28, category: "white-meat", rating: 4.2, available: true,  image: wholeChickenImg },
  { id: 11, name: "أفخاذ دجاج",      price: 30, category: "white-meat", rating: 4.1, available: true,  image: chickenThighImg },
  { id: 12, name: "صدر حبش",         price: 55, category: "white-meat", rating: 4.4, available: false, image: turkeyBreastImg },
];
