import { MenuStep, Review } from './types';

export const MENU_STEPS: MenuStep[] = [
  {
    step: 1,
    title: "Choisis ton Pain",
    options: ["Brioché", "Sans Gluten"],
  },
  {
    step: 2,
    title: "Choisis ton 'Steak'",
    options: ["Steak Haché (Halal)", "Steak de Butternut", "Galette de Pommes de Terre"],
    note: "Double steak +3€ • Triple steak +6€"
  },
  {
    step: 3,
    title: "Choisis ton Fromage",
    options: ["Tomme de Vache", "Cheddar", "Bleu du Queyras"],
    note: "Supplément fromage +1€"
  },
  {
    step: 4,
    title: "Choisis ta Sauce",
    options: ["Ketchup", "Mayonnaise", "Mayonnaise au Curry", "Moutarde"],
  },
  {
    step: 5,
    title: "Garniture à volonté",
    options: ["Salade", "Carotte", "Cornichon", "Chou Rouge", "Oignon Rouge", "Oignon Confit"],
  }
];

export const EXTRAS = [
  { name: "Bacon (Halal)", price: 1 },
  { name: "Oignon Crispy", price: 1 },
  { name: "Piment Oiseau", price: 1 },
];

export const FRIES = {
  price: 4.50,
  details: "Frites maison + Sauce au choix",
  toppings: ["Cheddar", "Oignon Crispy", "Bacon Halal"],
  toppingPrice: 1
};
