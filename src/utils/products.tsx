import sofa from "../assets/products/sofa.png"
import chair from "../assets/products/cadeira.png"
import chair2 from "../assets/products/cadeira 2.png"
import chair3 from "../assets/products/cadeira 4.png"
import table from "../assets/products/mesa.png"
import table2 from "../assets/products/mesa 2.png"
import table3 from "../assets/products/mesa 5.png"
import chairKitchen from "../assets/products/cadeira de jantar.png"
import tableBedroom from "../assets/products/mesa de quarto.png"
import tableBedroom2 from "../assets/products/mesa de quarto 2.png"
import sink from "../assets/products/pia de banheiro.png"
import plate from "../assets/products/prateleira.png"
import lamp from "../assets/products/lampada.png"
import lamp2 from "../assets/products/lampada 2.png"
import wardrobe from "../assets/products/armário.png"
import wardrobe2 from "../assets/products/armário 2.png"

export const products = [
  {
    name: "Luxury Chair",
    price: 299.99,
    id: 2,
    image: chair,
    promotion: 20,
    categories: ["Chairs", "Living Room", "Sales"],
  },
  {
    name: "Luxury Table 2",
    price: 299.99,
    id: 12,
    image: tableBedroom,
    promotion: 0,
    categories: ["Tables", "Bedroom"],
  },
  {
    name: "Luxury Lamp",
    price: 50.99,
    id: 4,
    image: lamp,
    promotion: 20,
    categories: ["Lamps", "Bedroom", "Sales"],
  },
  {
    name: "Luxury Chair 2",
    price: 299.99,
    id: 16,
    image: chairKitchen,
    promotion: 0,
    categories: ["Chairs", "Kitchen"],
  },
  {
    name: "Luxury Chair 3",
    price: 299.99,
    id: 5,
    image: chair2,
    promotion: 15,
    categories: ["Chairs", "Living Room", "Sales"],
  },
  {
    name: "Luxury Lamp 2",
    price: 299.99,
    id: 6,
    image: lamp2,
    promotion: 20,
    categories: ["Lamps", "Living Room", "Sales"],
  },
  {
    name: "Luxury Plates",
    price: 299.99,
    id: 7,
    image: wardrobe2,
    promotion: 0,
    categories: ["Plates", "Bedroom"],
  },
  {
    name: "Luxury Wardrobe",
    price: 299.99,
    id: 8,
    image: tableBedroom2,
    promotion: 20,
    categories: ["Wardrobes", "Bedroom", "Sales", "Bathroom"],
  },
  {
    name: "Luxury Plate",
    price: 69.99,
    id: 9,
    image: plate,
    promotion: 0,
    categories: ["Plates", "bathroom", "Bathroom"],
  },
  {
    name: "Luxury Table 2",
    price: 299.99,
    id: 10,
    image: table2,
    promotion: 0,
    categories: ["Tables", "Living Room"],
  },
  {
    name: "Luxury Wardrobe 2",
    price: 299.99,
    id: 11,
    image: wardrobe,
    promotion: 20,
    categories: ["Wardrobes", "Bedroom", "Sales"],
  },
  {
    name: "Luxury Sofa",
    price: 499.99,
    id: 1,
    image: sofa,
    promotion: 30,
    categories: ["Sofas", "Living Room", "Sales"],
  },
  {
    name: "Luxury Table 3",
    price: 299.99,
    id: 13,
    image: table3,
    promotion: 20,
    categories: ["Tables", "Living Room", "Sales"],
  },
  {
    name: "Luxury Chair 4",
    price: 299.99,
    id: 14,
    image: chair3,
    promotion: 20,
    categories: ["Chairs", "Bedroom", "Sales"],
  },
  {
    name: "Luxury Sink",
    price: 299.99,
    id: 15,
    image: sink,
    promotion: 20,
    categories: ["Sinks", "Bathroom", "Sales"],
  },
  {
    name: "Luxury Table",
    price: 299.99,
    id: 3,
    image: table,
    promotion: 15,
    categories: ["Table", "Bedroom", "Sales"],
  },
]
