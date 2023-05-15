import Container from "./components/Container";
import Categories from "./components/listings/Categories";
import ProduitBox from "./components/listings/ProduitBox";
import Navbar from "./components/navbar/Navbar";

export const products = [
  {
    id: 1,
    title: "Converse blanche",
    imageSrc: "/clothes/shoes/shoes1.jpg",
    category: "shoes",
    stock: 3,
    price: 99.99,
  },
  {
    id: 2,
    title: "Basket Nike",
    imageSrc: "/clothes/shoes/shoes2.jpg",
    category: "shoes",
    stock: 15,
    price: 124.99,
  },
  {
    id: 3,
    title: "Chaussures Costume Homme",
    imageSrc: "/clothes/shoes/shoes3.jpg",
    category: "shoes",
    stock: 15,
    price: 124.99,
  },
  {
    id: 4,
    title: "Escarpin Noir",
    imageSrc: "/clothes/shoes/shoes4.jpg",
    category: "shoes",
    stock: 15,
    price: 124.99,
  },
  {
    id: 4,
    title: "Jeans Femme",
    imageSrc: "/clothes/jeans/jeans1.jpg",
    category: "shoes",
    stock: 15,
    price: 55.99,
  },
  {
    id: 4,
    title: "Sac bleu",
    imageSrc: "/clothes/bags/bag1.jpg",
    category: "shoes",
    stock: 15,
    price: 55.99,
  },
  {
    id: 4,
    title: "Sac Vintage",
    imageSrc: "/clothes/bags/bag2.jpg",
    category: "shoes",
    stock: 15,
    price: 55.99,
  },
  {
    id: 4,
    title: "Tee Shirt Homme",
    imageSrc: "/clothes/teeshirts/teeshirt1.jpg",
    category: "shoes",
    stock: 15,
    price: 19.99,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Categories />
        <div className="px-6 py-4 grid grid-cols-2 gap-4">
          {products.map((item, index) => (
            <ProduitBox key={index} data={item} />
          ))}
        </div>
      </Container>
    </>
  );
}
