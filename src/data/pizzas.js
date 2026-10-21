import margheritaImg from "../assets/margherita.jpg";
import diavolaImg from "../assets/diavola.jpg";
import prosciuttoImg from "../assets/prosciutto.jpg";
import quattroFormaggiImg from "../assets/quattro-formaggi.jpg";
import capricciosaImg from "../assets/capricciosa.jpg";
import marinaraImg from "../assets/marinara.jpg";

const pizzas = [
  {
    name: "Margherita",
    description: "Tomato sauce, mozzarella, fresh basil and olive oil.",
    price: 9.5,
    image: margheritaImg,
    rating: 4.9,
    spicy: false,
    bestseller: true,
    vegetarian: true,
  },
  {
    name: "Diavola",
    description: "Tomato sauce, mozzarella, spicy salami and chili.",
    price: 11.5,
    image: diavolaImg,
    rating: 4.8,
    spicy: true,
    bestseller: true,
    vegetarian: false,
    isNew: true,
  },
  {
    name: "Prosciutto",
    description: "Tomato sauce, mozzarella, prosciutto cotto and mushrooms.",
    price: 12.5,
    image: prosciuttoImg,
    rating: 4.7,
    spicy: false,
    bestseller: false,
    vegetarian: false,
  },
  {
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola, fontina and parmesan on a light tomato base.",
    price: 13.0,
    image: quattroFormaggiImg,
    rating: 4.7,
    spicy: false,
    bestseller: false,
    vegetarian: true,
  },
  {
    name: "Capricciosa",
    description: "Tomato sauce, mozzarella, ham, mushrooms, artichokes and olives.",
    price: 13.5,
    image: capricciosaImg,
    rating: 4.6,
    spicy: false,
    bestseller: false,
    vegetarian: false,
  },
  {
    name: "Marinara",
    description: "Tomato sauce, garlic, oregano and olive oil. A Neapolitan classic without cheese.",
    price: 8.5,
    image: marinaraImg,
    rating: 4.5,
    spicy: false,
    bestseller: false,
    vegetarian: true,
  },
];

export default pizzas;
