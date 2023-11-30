import { CartData, NavLinks, Products } from "@/types/types";

export const navlinks: NavLinks[] = [
  {
    imgUrl: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgUrl: "/assets/icons/box_shipping.svg",
    route: "/products",
    label: "Products",
  },
  {
    imgUrl: "/assets/icons/cart.svg",
    route: "/cart",
    label: "Cart",
  },
];

export const products: Products[] = [
  {
    id: 1,
    name: "Quantum Energy Drink Infuser",
  },
  {
    id: 2,
    name: "Solar-Powered Backpack Charger",
  },
  {
    id: 3,
    name: "Nebula-Inspired Aromatherapy Diffuser",
  },
  {
    id: 4,
    name: "Smart Home Plant Care System",
  },
  {
    id: 5,
    name: "Holographic Gaming Console",
  },
  {
    id: 6,
    name: "Biodegradable Phone Case with Built-in Selfie Light",
  },
  {
    id: 7,
    name: "Portable Yoga Mat with Integrated Health Tracker",
  },
  {
    id: 8,
    name: "Customizable 3D Printed Sunglasses",
  },
  {
    id: 9,
    name: "Virtual Reality Fitness Experience Kit",
  },
  {
    id: 10,
    name: "Eco-Friendly Bamboo Fiber Water Bottle",
  },
];

export const cartData: CartData[] = [
  {
    id: 1,
    product: "Quantum Energy Drink Infuser",
    price: "$19.99",
    quantity: 1,
  },
  {
    id: 2,
    product: "Holographic Gaming Console",
    price: "$39.99",
    quantity: 2,
  },
];
